
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"


import './App.less';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default class App extends Component{
   render(){
     return(
      <BrowserRouter>
      <Switch>
       <Route path="/login" component={Login}></Route>
       <Route path="/" component={Login}></Route>
     </Switch>
</BrowserRouter>
)}
};


