import React, { useState } from  'react';
import react from 'react';
import { ToastProvider } from 'react-toast-notifications';
//import logo from './logo.svg';
import './App.css';
import UserInput from './components/userform';
function App(){
  return  (
    <div>
      <ToastProvider>
      <UserInput/>
      </ToastProvider>
    </div>
  )
  }

export default App;
