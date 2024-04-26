import React from 'react';
import './App.css';
import Style from './components/style.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className='container'>
      <Navbar/>
      <Main/>
    </div>
  )
}
