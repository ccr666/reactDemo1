import React,{ Component } from 'react';
import memorySave from '../../saveData/memorySave';
import {Redirect} from "react-router-dom"

import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

export default  class Login extends Component{
    render(){
        let user = memorySave.user;
        if(!user ||!user._id ){
            return <Redirect to="/login"></Redirect>
        }
        
        return(
            <div>
                <header></header>
                <h1>welcome {user.username}</h1>
            </div>
        )
    }
}