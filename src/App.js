import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {helloSaga} from './saga'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {trim} from './javascript/commonFun';
import logo from './logo.svg';
import './App.css';
const sagaMiddleware = createSagaMiddleware(helloSaga)
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
export default class App extends Component {
  render() {
    console.log('公共函数一:去除空格(另外几十种方法commonFun查看)');
    let a=" a   "
    console.log(trim(a,1));
    return (
      <store>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to sujunming </h1>
        </header>
      </div>
      </store>
    );
  }
}
