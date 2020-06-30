import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import memorySave from './saveData/memorySave';
import localstorageSave from "./saveData/localstorageSave"

//获取硬盘上的user
const user =localstorageSave.getUser();
//将硬盘上的user赋值给内存
memorySave.user = user;
ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

