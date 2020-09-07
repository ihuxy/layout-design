import React from 'react';

import {DesktopOutlined,ToolOutlined,LayoutOutlined,ProjectOutlined,CreditCardOutlined} from '@ant-design/icons';

import {findFn} from '../api/userApis';

import {basepath} from '../configs';

const initPath='/profile/info';

const routers=[
  {
    path:'/',
    // redirect:'/setting',
    name:'layout设计器',
    icon:<DesktopOutlined />,
    component:()=>import('@layout'),
    injectMenu:true,
    children:[
      {
        path:'/setting',
        // redirect:'/setting/layout',
        name:'自定义配置',
        icon:<ToolOutlined />,
        children:[
          {
            path:'/layout',
            name:'主题设计',
            icon:<LayoutOutlined />,
            component:()=>import('../views/setting/layout'),
          },
          {
            path:'/menu',
            name:'菜单设计',
            icon:<ProjectOutlined />,
            component:()=>import('../views/setting/menu'),
            injectMenu:true,
          },
          {
            path:'/header',
            name:'头部栏设计',
            icon:<CreditCardOutlined />,
            component:()=>import('../views/setting/nav'),
          },
          {
            path:'/level2',
            name:'level2',
            icon:<CreditCardOutlined />,
            denied:true,
            children:[
              {
                path:'/level3',
                name:'level3',
                icon:<CreditCardOutlined />,
                children:[
                  {
                    path:'/level4',
                    name:'level4',
                    icon:<CreditCardOutlined />,
                    component:'level test',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path:'/user',
    name:'登录',
    title:'登录',
    hideMenu:true,
    children:[
      {
        path:'/signin',
        name:'登录',
        component:()=>import('../user'),
      },
      {
        path:'/signup',
        name:'注册',
        component:()=><h1>注册</h1>,
      },
    ],
  },
  {
    path:'/404',
    name:'404',
    component:import('../404'),
    hideMenu:true,
  },
];


export default routers;





















