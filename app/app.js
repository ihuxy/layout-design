import React,{useMemo,useEffect,useState} from 'react';
import {useRouter,components as comp,utils} from '@common';

import permRouter from './router/permRouter';
import routers from './router';

import { Result, Button } from 'antd';


import SkeletonLayout from '@layout';
import SkeletonContent from '@layout/skeletonContent';

const {Spinner}=comp;
const {sleep}=utils;

import configs,{defaultRouter} from './configs';

const permissionFn=async ()=>{
  await sleep(350);
  return {
    permission:[],
  };
};


const Skeleton=props=><SkeletonLayout menu={defaultRouter} current={defaultRouter}><SkeletonContent /></SkeletonLayout>;


const Router=props=>{
  const {components,loading,store,updateRouter}=useRouter(props);
  useEffect(()=>{
    const {subscribe,setState}=store;
    setState({permission:props.permission});
    subscribe('update-router',result=>{
      updateRouter({routers:result.menu});
    });
  },[]);
  const comps=useMemo(()=>components,[components]);
  return <>
    {comps}
    {loading&&<Spinner global />}
  </>;
};

const App=()=>{
  const [routes,setRoutes]=useState(null);
  const [permission,setPermission]=useState([]);
  useEffect(()=>{
    const getPerm=async ()=>{
      try{
        const {permission}=await permissionFn({time:+new Date()});
        const permRouters=permRouter(routers,permission);
        setRoutes(permRouters);
        setPermission(permission);
      }catch(err){
        setRoutes(null);
      }
    };
    getPerm();
  },[]);
  if(!routes){
    return <Skeleton />;
  }
  if(!routes.length){
    return <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />;
  }
  return <Router routers={routes} permission={permission} {...configs} />;
};

export default App;


