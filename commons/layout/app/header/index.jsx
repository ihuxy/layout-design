import React,{useState,useEffect,useRef,useCallback} from 'react';
import {message} from 'antd';

import {utils} from '@common';
const {storage}=utils;

import {title} from '@app/configs';

import {leftNav,rightNav} from '@app/configs/nav';

import HoriMenu from './horiMenu';

import NavList from './navList';

import './index.less';

const Header=props=>{
  const {collapseMenu,switchTheme,navMenu,user,collapse,theme,store}=props;

  const [leftList,setLeftList]=useState(leftNav(theme.key));
  const [rightList,setRightList]=useState(rightNav({user}));

  useEffect(()=>{
    const {subscribe,setState}=store||{};
    if(subscribe){
      subscribe('update-nav',result=>{
        const {type,data}=result;
        if(type==='left'){
          setLeftList(data);
          setState({'nav-data':{leftList:data}});
        }
        if(type==='right'){
          setRightList(data);
          setState({'nav-data':{rightList:data}});
        }
      });
      setState({'nav-data':{leftList,rightList}});
    }
  },[]);

  const handleNavClick=item=>{
    if(item.type==='logout'){
      message.success('退出登录！');
      storage.rm('token');
      props.router.push(item.path);
    }
    if(item.type==='theme'){
      switchTheme(item.key);
    }
    if(item.type==='collapse'){
      collapseMenu();
    }
    if(typeof item.handle==='function'){
      item.handle(item);
    }
  };

  return <div className="header">
    <div className="header-wrap">
      <div className="banner">
        {/* <div className="logo"><img src={logo} alt="logo" /></div> */}
        <div className="title">{title}</div>
      </div>
      <div className="nav">
        <div className="nav-wrap">
          <div className="nav-left">
            <NavList list={leftList} collapse={collapse} click={handleNavClick} />
          </div>
          {navMenu?.length?<HoriMenu menu={navMenu} />:null}
          <div className="nav-right">
            <NavList list={rightList} click={handleNavClick} />
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Header;



































