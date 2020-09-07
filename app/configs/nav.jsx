import React from 'react';
import {message} from 'antd';
import { UserOutlined, PoweroffOutlined, RestOutlined } from '@ant-design/icons';

import {themeList} from '@app/configs/theme';

import logo from '@app/assets/images/usr.jpg';

import {components,utils} from '@common';
const {Anico}=components;
const {storage}=utils;

export const leftNav=themeKey=>[
  {
    name:'切换',
    type:'collapse',
    Custom:({status})=><Anico type={status?'right':''} />,
  },
  {
    name:'主题',
    type:'themeList',
    children:themeList.map(v=>{
      v.key===themeKey&&(v.active=true);
      return v;
    }),
  },
];
export const rightNav=({user,projList})=>[
  {
    name:'user',
    img:logo,
    children:[
      {
        name:'个人中心',
        type:'profile',
        icon:<UserOutlined />,
        // path:'/user/profile',
      },
      {
        name:'退出',
        type:'logout',
        icon:<PoweroffOutlined />,
        path:'/user/login',
      },
    ],
  },
  {
    name:'项目入口',
    type:'projectList',
    Ricon:true,
    children:[
      {
        name:'t1',
      },
      {
        name:'t2',
      },
      {
        name:'t3',
      },
    ],//projList,
  },
  {
    name:'清缓',
    icon:<RestOutlined />,
    type:'button',
    handle:item=>{
      storage.clear();
      message.success('清除缓存成功！');
      location.href='/';
    },
  },
];




































