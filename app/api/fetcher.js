import {message} from 'antd';
import {utils} from '@common';
const {fetcher,storage,cancelablePromise}=utils;

const {target}=require('../../configs/userApis');

import logout,{proLogout} from './logout';

const success_code=['000000',200];

/* const handler=response=>response.json().then(result=>{
  result.code=result.code??response.status;
  const {message:msg,code}=result;
  if(code===50014){
    message.error(msg);
    proLogout();
    return;
  }
  if(code===401){
    message.error(msg);
    logout();
    return;
  }
  if(code!==200){
    throw {message:msg};
  }
  return result;
}).catch(error=>{
  const msg=response.statusText||error.message;
  message.error(msg);
  throw msg;
}); */

const handler=response=>{
  if(response.status==401){
    message.error(response.statusText);
    logout();
    return;
  }
  if(response.status==50014){
    message.error(response.statusText);
    proLogout();
    return;
  }
  if(response.status!=200){
    message.error(response.statusText);
    throw {message:response.statusText};
  }
  return response.json().then(result=>{
    result.code=result.code??response.status;
    const {message:mesg,msg,code}=result;
    /* if(code==401){
      message.error(msg||mesg);
      doLogout();
      return;
    } */
    if(!success_code.includes(code)){
      throw {message:msg||mesg};
    }
    return result;
  }).catch(error=>{
    message.error(error.message);
    throw error.message;
  });
};

const dlHandler=response=>{
  if(response.status!==200){
    message.error(response.statusText);
    throw {message:response.statusText};
  }
  const disposition=response.headers.get('Content-Disposition');
  // const filename=decodeURIComponent(disposition.split(';')[1].split('=')[1]);
  const fileInfo=decodeURIComponent(disposition);
  return response.blob().then(result=>{
    /* const {data,message:msg,code}=result;
    if(code===50014){
      message.error(msg);
      logout();
      return;
    }
    if(code!=200){
      throw {message:msg};
    } */
    return {result,fileInfo};
  }).catch(error=>{
    message.error(error);
    throw error;
  });
};

const fetchApi=fetcher(handler);

const dlFile=fetcher(dlHandler);

const getToken=()=>({'Authorization':`yiru ${storage.get('token')}`});

const fetch=({method,url,...opt})=>fetchApi(method)(`${target}${url}`,{...opt,headers:getToken()});

export const dlApi=({method,url,...opt})=>dlFile(method)(`${target}${url}`,{...opt,headers:getToken()});

export default fetch;



// 可取消及超时设置
// const {promiseFn,cancelFn}=cancelablePromise(fetch,8000);



/* operation */

const getToken1=()=>({'X-Token':storage.get('token')});

const target1='/v1';

export const fetch1=({method,url,...opt})=>fetchApi(method)(`${target1}${url}`,{...opt,headers:getToken1()});

/* operation */



