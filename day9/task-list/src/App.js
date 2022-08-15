import React from 'react';

import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

import TaskPage from './components/tasks/TaskPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Navbar from './components/common/Navbar';


export default function App() {

  return(
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path= '/' element= {<TaskPage/>} />
        <Route path= '/login' element= {<LoginPage/>} />
        <Route path= '/register' element= {<RegisterPage/>} />
      </Routes>
      </BrowserRouter>
  )
}