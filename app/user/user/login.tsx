import * as React from 'react';

import {$fetch,$storage} from '../../tools/yiru-tools';
import {dispatchToken} from '../../stores/userManage';

import {isAuthed} from '../../servers/storage';

export default class Login extends React.Component<any,any> {
  state={
    title:'登录',
    mval:'',
    pval:'',
    passwdType:'password',
  };
  componentWillMount(){
    /*if(isAuthed()){
      location.href='#/';
    }*/
  }
  login=()=>{
    var data={
      email:this.state.mval,
      password:this.state.pval,
    };
    var path='/';
    /*let users=JSON.parse(localStorage.getItem('users'));
    if(users){
      var f=true;
      users.map((v,k)=>{
        if(v.name==name&&v.password==password){
          localStorage.setItem('curUser',name);
          this.context.router.push(path);
          f=false;
          return false;
        }
      })
      if(f) alert('用户名或密码错误！');
    }
    else{
      this.context.router.push('info/signup');
      return true;
    }*/
    $fetch.post('/auth/login',{
      data:data,
    }).then(data => {
      if(data.message){
        console.log(data.message);
      }
      if(data.token){
        $storage.set('token',data.token);
        $storage.set('user',data.user);
        dispatchToken(data.token);
        location.href=path;
      }
    })
    .catch(e => console.log('登录失败,'+e));
  };

  getEmail=(e)=>{
    this.setState({
      mval:e.target.value,
    });
  };
  getPasswd=(e)=>{
    this.setState({
      pval:e.target.value,
    });
  };

  changeType=()=>{
    this.setState({
      passwdType:this.state.passwdType=='password'?'text':'password',
    });
  };

  resetVal=()=>{
    this.setState({
      mval:'',
    });
  };

  toQRcode=()=>{
    location.href='#/user/weixin';
  };

  render() {
    const{mval,pval,passwdType}=this.state;
    return(
      <form>
        <h4>{this.state.title}</h4>
        <div className="log-row">
          <input type="text" placeholder="邮箱" value={mval} onChange={this.getEmail} />
          {mval?<i className="fa fa-times-circle" onClick={this.resetVal}/>:''}
        </div>
        <div className="log-row">
          <input type={passwdType} placeholder="密码" value={pval} onChange={this.getPasswd} />
          {pval?<i className="fa fa-eye" onClick={this.changeType}/>:''}
        </div>
        <div className="log-row">
          <button type="button" className="ybtn ybtn-success ybtn-block" onClick={this.login}>登录</button>
        </div>
        <div className="log-row">
          <a className="y-left" href="#/user/signup">忘记密码</a>
          <a className="y-right" href="#/user/signup">免费注册</a>
        </div>
        <div className="other-log">
          <div className="other-txt">
            <span>第三方登录</span>
          </div>
          <div className="other-ico">
            <i className="fa fa-qq"/>
            <i className="fa fa-weibo"/>
            <i className="fa fa-weixin" onClick={this.toQRcode}/>
          </div>
        </div>
      </form>
    );
  }
}