import {utils} from '@common';
import {users,src,srcList} from './model/users';
const {sleep}=utils;
export const fetchUsers=async (params)=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:users,
  };
};

export const fetchUserInfo=async (params)=>{
  await sleep();
  // console.log('fetchUserInfo:请求成功');
  return {
    code:200,
    msg:'success',
    data:users[0],
  };
};

export const fetchUserSrc=async (params)=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:src(params.id),
  };
};

export const fetchUserSrcList=async (params)=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:srcList(params.type),
  };
};


