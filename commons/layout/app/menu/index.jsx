import React from 'react';

const {useState,useEffect}=React;

import {utils} from '@common';

const {getSelected,uuidv4,unique}=utils;

import './index.less';

import {render,renderCollapsed} from './render';

let historyList=[];

const getList=path=>{
  historyList.unshift(path);
  // historyList=unique(historyList);
  if(historyList.length>50){
    historyList.pop();
  }
  return historyList;
};

const Menu=props=>{
  const [list,setList]=useState([]);
  const {menu,collapsed,inputPath}=props;
  
  const [data,setData]=useState(menu);
  useEffect(()=>{
    setData(menu);
  },[menu]);
  useEffect(()=>{
    const li=getList(inputPath||'/');
    setList(li);
  },[inputPath]);
  const toggle=(e,v)=>{
    e.stopPropagation();
    v.open=!v.open;
    const selecteds=getSelected(data,v.path,'path');
    const psel=selecteds.slice(0,-1);
    psel.map(item=>item.uuid=uuidv4());
    setData([...data]);
  };

  return <div className="menu">
    <ul className="tree-root">
      {collapsed?renderCollapsed(data):render(data,toggle)}
    </ul>
    <div className="menu-btbar">
      <h4 className="btbar-title">history list</h4>
      <ul className="btbar-list">
        {
          list.map((v,k)=><li key={`${v}-${k}`}><a href={v}>{v}</a></li>)
        }
      </ul>
    </div>
  </div>;
};

export default Menu;





















