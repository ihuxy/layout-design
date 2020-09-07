import * as React from 'react';

import {$fetch} from '../../tools/yiru-tools';

import {Row,Col,Button,Input,Table,Form,FormItem,Modal,Muiltselect} from '../content/components';

// import './config.less';

export default class UserConfig extends React.Component<any,any> {
  state={
    reg:true,
  };
  getFD=(d)=>{
    console.log(d);
  };
  getSelectVal=(v)=>{
    console.log(v);
  };
  test=()=>{
    this.setState({
      reg:!this.state.reg,
    });
  };
  render() {
    return(
      <div className="user-configs">
        <Row gutter={8}>
          <h2>Muiltselect</h2>
          <Col span={6}>
            <Muiltselect data={[{value:'1'},{value:'121'},{value:'122'},{value:'123'},{value:'124'},{value:'222'},{value:'333'},{value:'4555'},{value:'666'},{value:'76'},{value:'88'},{value:'70'},{value:'99'}]} value={['121','122']} getSelectVal={this.getSelectVal} />
          </Col>
        </Row>
        {/*<Row>
                  <Col span={6}>
                    <h2>头部配置</h2>
                    <Row gutter={8}>
                      <Form horizontal getFormData={this.getFD}>
                        <h4>brand配置</h4>
                        <FormItem label="title" opts={{placeholder:'系统名',value:''}} />
                        <FormItem label="subtitle" opts={{placeholder:'二级名',value:''}} />
                        <FormItem label="logo" opts={{placeholder:'logo图标地址',value:''}} />
                      </Form>
                    </Row>
                    <Row gutter={8}>
                      <Form horizontal getFormData={this.getFD}>
                        <h4>navbar配置</h4>
                        <Col span={3}>
                          <label style={{textAlign:'right'}}>111</label>
                        </Col>
                        <Col span={8}>
                          111
                        </Col>
                        <FormItem label="dropList" opts={{placeholder:'用户名',value:''}} />
                        <FormItem label="showSearchbar" opts={{placeholder:'邮箱',value:''}} />
                        <FormItem label="showRightTogbar" opts={{placeholder:'密码',value:'',type:'password'}} />
                        <FormItem label="login" opts={{placeholder:'等级',value:'0',disabled:true}} />
                        <FormItem label="click" opts={{placeholder:'密码',value:'',type:'password'}} />
                        <FormItem label="listClick" opts={{placeholder:'等级',value:'0',disabled:true}} />
                      </Form>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <h2>侧边栏配置</h2>
                    <Row gutter={8}>
                      <Form horizontal getFormData={this.getFD}>
                        <h4>sidebar配置</h4>
                        <FormItem label="projectList" opts={{placeholder:'用户名',value:''}} />
                        <FormItem label="showSidebarTitle" opts={{placeholder:'邮箱',value:''}} />
                        <FormItem label="userInfo" opts={{placeholder:'密码',value:'',type:'password'}} />
                      </Form>
                    </Row>
                    <Row gutter={8}>
                      <Form horizontal getFormData={this.getFD}>
                        <h4>main配置</h4>
                        <FormItem label="showPagehead" opts={{placeholder:'用户名',value:''}} />
                        <FormItem label="showPagetitle" opts={{placeholder:'邮箱',value:''}} />
                      </Form>
                    </Row>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <h2>主要配置</h2>
                  <Col span={6}>
                    <Form horizontal getFormData={this.getFD}>
                      <h4>其它配置</h4>
                      <FormItem label="rightbar" opts={{placeholder:'用户名',value:''}} />
                      <FormItem label="footer" opts={{placeholder:'用户名',value:''}} />
                      <FormItem label="routers" opts={{placeholder:'邮箱',value:''}} />
                      <FormItem label="routeAnimate" opts={{placeholder:'密码',value:'',type:'password'}} />
                      <FormItem label="scroll" opts={{placeholder:'等级',value:'0',disabled:true}} />
                      <FormItem label="sidebarScroll" opts={{placeholder:'密码',value:'',type:'password'}} />
                      <FormItem label="browserRouter" opts={{placeholder:'等级',value:'0',disabled:true}} />
                    </Form>
                  </Col>
                </Row>*/}
        <Row gutter={8}>
          <h2>主要配置</h2>
          <Col span={6}>
            <Form horizontal getFormData={this.getFD}>
              <h4><p>其它配置</p></h4>
              <FormItem type="radio" label="单选" name="radio" opts={{opt:[{value:'11',key:'a1'},{value:'22',key:'a2'}],value:'a1'}} />
              <FormItem type="checkbox" label="多选" name="checkbox" opts={{opt:[{value:'11'},{value:'22'}],value:['11','22']}} />
              <FormItem type="select" label="下拉选择" name="select" opts={{opt:[{value:'11'},{value:'22'}]}} />
              <FormItem type="switch" label="切换" name="switch" opts={{value:true}} />
              <FormItem type="text" label="input" name="text" opts={{text:'button',color:'info'}} />
              <FormItem type="textarea" label="textarea" opts={{placeholder:'邮箱',value:''}} />
              <FormItem type="" label="密码" opts={{placeholder:'密码',value:'',type:'password'}} />
              <FormItem type="" label="等级" opts={{placeholder:'等级',value:'0',disabled:true}} required />
              <FormItem type="" label="等级1" required rules={[{reg:this.state.reg,tips:'hhhhhhhhh'}]}>
                <Input placeholder="ttt" value="" />
              </FormItem>

              <FormItem label="rightbar" opts={{placeholder:'用户名',value:''}} />
              <FormItem label="footer" opts={{placeholder:'用户名',value:''}} />
              <FormItem label="routers" opts={{placeholder:'邮箱',value:''}} />
              <FormItem label="routeAnimate" opts={{placeholder:'密码',value:'',type:'password'}} />
              <FormItem label="scroll" opts={{placeholder:'等级',value:'0',disabled:true}} />
              <FormItem label="sidebarScroll" opts={{placeholder:'密码',value:'',type:'password'}} />
              <FormItem label="browserRouter" opts={{placeholder:'等级',value:'0',disabled:true}} />
            </Form>
          </Col>
        </Row>
        <Button text="test" click={this.test} />
      </div>
    );
  }
}