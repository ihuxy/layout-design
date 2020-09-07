import {utils} from '@common';
const {storage}=utils;

import {logoutFn} from '@app/api/api';

import configs from '../configs';

const logout=()=>{
  // logoutFn();
  storage.rm('token');
  location.href=configs.browserRouter?'/user/signin':'#/user/signin';
};

export default logout;


export const proLogout=()=>{
  logoutFn();
  storage.rm('token');
  location.href=configs.browserRouter?'/operation/user/login':'#/operation/user/login';
};