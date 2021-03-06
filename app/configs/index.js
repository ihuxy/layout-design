import {utils} from '@common';
const {storage}=utils;

const browserRouter=!process.env.isDev;


const configs=require('../../configs');
const appName=require('../../configs/appName')||'app';
const {DEV_ROOT_DIR,PRD_ROOT_DIR}=configs(appName);

const basepath=browserRouter?PRD_ROOT_DIR:DEV_ROOT_DIR;

export {basepath};

export const title='项目管理平台';

const beforeRender=input=>{
  const token=storage.get('token');
  if(!token){
    const {path}=input;
    if(path.includes('/operation')){
      return {path:'/operation/user/login'};
    }
    return {path:'/user/signin'};
  }
};

export default {
  browserRouter,
  title,
  beforeRender,
  basepath,
  // afterRender,
};

export const defaultRouter=[
  {
    path:'/loading',
    name:'Loading...',
  },
];


export const themeList=[
  {
    name:'深暗色',
    key:'dark',
    type:'theme',
  },
  {
    name:'浅亮色',
    key:'light',
    type:'theme',
  },
  {
    name:'门户',
    key:'portal',
    type:'theme',
  },
  {
    name:'skeleton',
    key:'skeleton',
    type:'theme',
  },
];


export const color=[
  {
    value:'#ff4d4f',
    key:'danger',
    label:'高风险',
  },

  {
    value:'#fa8c16',
    key:'warning',
    label:'较高风险',
  },

  {
    value:'#faad14',
    key:'alert',
    label:'中风险',
  },

  {
    value:'#1890ff',
    key:'low',
    label:'低风险',
  },
];



export const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


































