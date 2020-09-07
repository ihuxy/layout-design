import * as React from 'react';

import './user.less';
import {isAuthed} from '../../servers/storage';

export default class User extends React.Component<any,any> {

  componentDidMount(){
    if(!isAuthed()){
      // var h=document.body.offsetHeight;
      // const h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
      var h=window.innerHeight;
      var user:any=document.getElementsByClassName('user')[0];
      user.style.height=h+'px';
    }
  }

  render() {
    if(isAuthed()){
      location.href='#/';
      return false;
    }
    return(
      <div className="user">
        <div className="log-panel">
          <div className="log-left">
            <img src={require('./logo.png')} />
          </div>
          <div className="log-right">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}