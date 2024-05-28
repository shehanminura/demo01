import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Aos from 'aos';
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'


function App() {

  useEffect(()=>{
    Aos.init({
      duration:3000
    })

  },[])
  

  return (
    <div className='container'>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <a class="navbar-brand" href="#"></a>
    
    <img src={reactLogo}></img>
    &nbsp;&nbsp;&nbsp;<span>Shehan</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
      <span class="navbar-toggler-icon"></span>
      
    </button>
   
    <div class="collapse navbar-collapse" id="navbarNav">
    
      <ul class="navbar-nav ms-auto">
      
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  <Home></Home>
  </div>
  
  )
}

export default App
