import React, { Component } from 'react';
import "./login.css"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useState, useEffect } from 'react';

import { reqLogin } from "../../api/"

import Password from 'antd/lib/input/Password';
import { message } from 'antd';
import memorySave from '../../saveData/memorySave';
import localstorageSave from "../../saveData/localstorageSave"
import {Redirect} from "react-router-dom"


export default class Login extends Component {
    
     onFinish =async values=> {
         //console.log("...........")
        //console.log("Received value of from:",values)
        //发送ajax请求，
        //1)解构values赋值给username,Password
        let { username, password } = values;
        //调用reqLogin 返回一个promise
        // reqLogin(username, password).then(response => {
        //     //console.log("请求成功", response)
        // }).catch(error => {
        //     //console.log("请求失败", error)
        // })
        //await只能拿到成功的结果
        let response = await reqLogin(username,password)
            // console.log("成功",response.data)
            let res = response.data;

            if(res.status === 0){
             //把数据保存到内存
             memorySave.user = res.data
             //把数据保存到本地
            localstorageSave.saveUser(res.data)
             //登陆成功，跳到首页面
             this.props.history.replace("/")
          console.log("//////")
            }else{
                console.log("登录失败")
                message.error(res.meg);
            }
        
        
    };
    render() {
        let user = memorySave.user;
        if(user&&user._id){
           return <Redirect to="/"></Redirect>
        }
        return (
            <div class="login">
                <header>
                    <h1>商品管理系统</h1>
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        //这是一个类组件，函数级别的组件没有this
                        onFinish={ this.onFinish }
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    max: 14,
                                    message: "用户名最长位数为14位"
                                },
                                {
                                    min: 4,
                                    message: "用户名最短位数为4位"
                                },
                                {
                                    pattern: /^[a-zA-Z0-9]+$/,
                                    message: "用户名必须为英文，数字和下划线"
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                {
                                    max: 18,
                                    message: "密码最长位数为18位"
                                },
                                {
                                    min: 4,
                                    message: "密码最短位数为4位"
                                },
                                {
                                    pattern: /^[a-zA-Z0-9]+$/,
                                    message: "密码必须为英文，数字和下划线"
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
        </Button>
                            <a href="javascript;"></a>
                        </Form.Item>
                    </Form>



                </section>
            </div>
        )
    }
}




