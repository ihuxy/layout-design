import * as React from 'react';

import {$fetch} from '../../tools/yiru-tools';

import {Button,Input,Table,Form,FormItem,Modal} from '../content/components';

import {isAuthed,getToken} from '../../servers/storage';

const token=getToken();

const thead=[{key:'_id',value:'id'},{key:'name',value:'用户名'},{key:'email',value:'邮箱'},{key:'role',value:'等级'}];

export default class UserManage extends React.Component<any,any> {
  state={
    users:[],
    showModal:false,
    data:[],
  };
  componentWillMount(){
    if(token){
      this.showUsers();
    }else{
      location.href='#/user/login';
    }
  }
  componentDidMount(){
    
  }
  componentWillUnmount(){
    
  }
  showUsers=()=>{
    $fetch.get('/info/all',null,true).then((data)=>{
      console.log('data',data);
      if(!(data instanceof Array)){
        data=[];
      }
      this.setState({
        users:data,
        showModal:false,
      });
    }).catch((e)=>{
      console.log('error',e);
    });
  };
  openModal=()=>{
    this.setState({
      showModal:true,
    });
  };
  hideModal=()=>{
    this.setState({
      showModal:false,
    });
  };
  getFD=(d)=>{
    // console.log(d);
    this.state.data=d;
  };
  addUser=()=>{
    /*const data={
      name:'admin',
      email:'admin@admin.com',
      password:'123456',
      role:0,
    };*/
    const data={
      name:this.state.data['用户名'],
      email:this.state.data['邮箱'],
      password:this.state.data['密码'],
      role:this.state.data['等级'],
    };
    console.log(data);
    $fetch.post('/user/add',{
      data:data,
    },true).then((data)=>{
      console.log(data);
      this.showUsers();
    }).catch((e)=>{
      console.log(e);
    });
  };
  editUser=(data)=>{
    console.log(data);
    $fetch.post('/user/edit',{
      data:data,
    },true).then((data)=>{
      this.showUsers();
    }).catch((e)=>{
      console.log(e);
    });
  };
  deleteUser=(data)=>{
    console.log(data);
    $fetch.post('/user/delete',{
      data:data,
    },true).then((data)=>{
      this.showUsers();
    }).catch((e)=>{
      console.log(e);
    });
  };
  more=(v)=>{
    console.log(v);
    location.href='#/userinfo/'+v._id;
  };

  render() {
    const {users,showModal}=this.state;
    return(
      <div>
        <div>
          <Button color="success" icon="plus" text="添加" click={this.openModal} />
        </div>
        <Modal visible={showModal} title="添加用户" dragable ok={this.addUser} cancel={this.hideModal}>
          <Form getFormData={this.getFD}>
            {/*<FormItem label="id" opts={{placeholder:'id',value:'undefined',disabled:true}} />*/}
            <FormItem label="用户名" opts={{placeholder:'用户名',value:''}} />
            <FormItem label="邮箱" opts={{placeholder:'邮箱',value:''}} />
            <FormItem label="密码" opts={{placeholder:'密码',value:'',type:'password'}} />
            <FormItem label="等级" opts={{placeholder:'等级',value:'0',disabled:true}} />
          </Form>
        </Modal>
        <Table thead={thead} tbody={users} updateRow={this.editUser} deleteRow={this.deleteUser} more={this.more} />
      </div>
    );
  }
}