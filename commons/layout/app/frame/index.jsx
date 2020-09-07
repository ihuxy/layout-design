import React,{useState,useEffect,useMemo} from 'react';

import Header from '../header';
import Topbar from '../topbar';
import Footer from '../footer';
import Main from '../main';

import {utils,use} from '@common';
const {storage}=utils;

// import * as defTheme from '@app/configs/theme';

import {themeList} from '@app/configs/theme';

import './index.less';

const formatMenu=(menu,type='sideMenu',cb=null)=>{
  const menuConfig={
    sideMenu:null,
    navMenu:null,
  };
  const newMenu=menu[0]?.children;
  menuConfig[type]=newMenu;
  return menuConfig;
};

const Frame=props=>{

  const {menu}=props;

  const [menuType,setMenuType]=useState('sideMenu');

  const [showMenu,setShowMenu]=useState(false);

  const [theme,setTheme]=useState(storage.get('theme')||themeList[0]);

  // const [themeKey,setThemeKey]=useState('dark');

  useEffect(()=>{
    if(props.store?.subscribe){
      const {subscribe}=props.store;
      subscribe('set-theme',result=>{
        const list=result.theme;
        const newTheme={
          name:'自定义',
          key:'custom',
          list,
        };
        storage.set('theme',newTheme);
        setTheme(newTheme);
      });
      subscribe('set-menuType',result=>setMenuType(result.menuType?'navMenu':'sideMenu'));
    }
  },[]);

  const switchTheme=type=>{
    const current=themeList.find(v=>v.key===type)||themeList[0];
    storage.set('theme',current);
    setTheme(current);
  };

  const collapseMenu=show=>show===false?setShowMenu(show):setShowMenu(state=>!state);

  const showMenuCls=showMenu?' showMenu':'';

  const {sideMenu,navMenu}=formatMenu(menu,menuType);

  const themeStyle={};
  theme.list?.map(v=>themeStyle[v.key]=v.value);

  return <div className="frame" style={themeStyle}>
    <header className="frame-header">
      {/* <Topbar {...props} /> */}
      <Header {...props} navMenu={navMenu} collapseMenu={collapseMenu} collapse={showMenu} switchTheme={switchTheme} theme={theme} />
    </header>
    <main className="frame-main">
      <Main {...props} menu={sideMenu} showMenu={showMenuCls} />
    </main>
    <footer className={`frame-footer${showMenuCls}`}>
      <Footer />
    </footer>
  </div>;
};


export default Frame;



































