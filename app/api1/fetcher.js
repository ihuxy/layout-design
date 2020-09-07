import {message} from 'antd';

import {utils} from '@common';
const {fetcher,cancelablePromise}=utils;

const handler=response=>response.json().then(result=>{
  const {data,msg,code}=result;
  if(code!=='000000'){
    // message.error(msg);
    throw {message:msg};
  }
  return result;
}).catch(error=>{
  message.error(error.message);
  throw error;
});

const handler1=response=>{
  const disposition=response.headers.get('Content-Disposition');
  // const filename=decodeURIComponent(disposition.split(';')[1].split('=')[1]);
  const fileInfo=decodeURIComponent(disposition);
  return response.blob().then(result=>{
    const {data,msg,code}=result;
    if(code!=='000000'){
      message.error(msg);
    }
    return {data,fileInfo};
  }).catch(error=>{
    message.error(error);
    throw error;
  });
};

const fetchApi=fetcher(handler);


const headers={
  'Authorization':'123',
};

const fetch=({method,url,...opt})=>fetchApi(method)(url,{...opt,headers});


const suspenseConfig={
  delay:8000,
  timeoutMsg:'请求超时！',
  cancelMsg:'请求已取消！',
};
export const handleFetch=data=>{
  const {promiseFn,cancelFn}=cancelablePromise(fetch(data));
  setTimeout(()=>{
    cancelFn({timeout:suspenseConfig.timeoutMsg});
  },suspenseConfig.delay);
  return promiseFn;
};



export default fetch;



