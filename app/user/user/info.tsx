import * as React from 'react';
import {$fetch} from '../../tools/yiru-tools';
import {Button} from '../content/components';

export default class UserTest extends React.Component<any,any> {
  state={
    info:{},
  };
  componentDidMount(){
    const url=location.hash.split('/');
    $fetch.post('/info/user',{
      data:{
        _id:url[url.length-1],
      },
    },true).then((data)=>{
      this.setState({
        info:data,
      });
    }).catch((e)=>{
      console.log(e);
    });
  }
  resetPwd=()=>{
    const url=location.hash.split('/');
    $fetch.post('/user/edit',{
      data:{
        _id:url[url.length-1],
        password:'123456',
      },
    },true).then((data)=>{
      console.log(data);
    }).catch((e)=>{
      console.log(e);
    });
  };
  render() {
    const info:any=this.state.info;
    return(
      <div>
        <p>email:{info.email}</p>
        <p>name:{info.name}</p>
        <p>role:{info.role}</p>
        <Button text="密码重置" color="info" click={this.resetPwd} />
      </div>
    );
  }
}