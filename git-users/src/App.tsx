import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UsersList from './Users/usersList';
import User from './Users/user';

function App() {
  return (
    <BrowserRouter>
    <Switch><div className="App">
    <body className="App-body">
    <Route path="/" exact component={UsersList} />
    <Route path="/user/:login" exact component={User} />
    </body>
  </div></Switch>
    
  </BrowserRouter>
  );
}

export default App;
