import React,{useState,useRef,useCallback} from 'react';

import {utils,use} from '@common';
const {traverItem}=utils;
const {useClickAway}=use;

const NavItem=({click,item})=>{
  const itemRef=useRef();
  const [open,setOpen]=useState(false);
  useClickAway(itemRef,e=>setOpen(false));
  const {Custom,img,name,icon,children,Ricon,active}=item;
  const hasChildren=children?.length;
  const toggleNav=(e,item,hasChild=false)=>{
    // e.stopPropagation();
    if(hasChild){
      setOpen(prev=>!prev);
    }else{
      setOpen(false);
    }
    click(item,!hasChild);
  };
  const ri=Ricon===true?<i className={`huxy-angle-${open?'top':'bt'}`} />:(Ricon?<Ricon status={open} />:null);
  const itemEl=Custom?<Custom status={item.collapse} />:img?<div className="avatar">
    <img src={img} alt="avatar" />
    {name?<span className="txt">{name}</span>:null}
    {ri}
  </div>:<>
    {typeof icon==='string'?<i className={icon} />:(icon||null)}
    {name?<span className="txt">{name}</span>:null}
    {ri}
  </>;
  return <li ref={itemRef}>
    <a onClick={e=>toggleNav(e,item,hasChildren)} className={active?'active':''}>{itemEl}</a>
    {hasChildren?<ul className={`huxy-arrow-rt${open?' show':''}`}>
      {
        children.map(v=><li key={v.name}>
          <a onClick={e=>toggleNav(e,v)} className={v.active?'active':''}>
            {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
            <span style={{display:'inline-block'}}>{v.name}</span>
          </a>
        </li>)
      }
    </ul>:null}
  </li>;
};

const NavList=props=>{
  const {list,click,collapse}=props;
  const [data,setData]=useState(list);
  const updateList=useCallback(item=>{
    const newData=traverItem(v=>{
      if(item.name===v.name){
        v.active=!item.active;
      }else{
        v.active=false;
      }
    },data);
    setData(newData);
  },[]);
  const handleClick=(item,update)=>{
    if(update){
      updateList(item);
    }
    click(item);
  };
  return <ul>
    {
      data.map(v=>{
        if(v.type==='collapse'){
          v.collapse=collapse;
        }
        return <NavItem key={v.name} click={handleClick} item={v} />;
      })
    }
  </ul>;
};

export default NavList;



































