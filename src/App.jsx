import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Aos from 'aos';
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Lecture from './components/Lecture'
import x from './assets/Black Yellow Gym Fitness Center Banner Landscape (1).png'


function App() {

 const [component,setComponenet] = useState(<Home/>)

 function setMenu(menu){
  switch(menu){
    case 'home':{
      setComponenet(<Home/>);
      break;
    }
    case 'lecture':{
      setComponenet(<Lecture/>);
      break;
      }
      case 'lecture':{
        setComponenet(<Lecture/>);
        break;
    }
  }}
 

  useEffect(()=>{
    Aos.init({
      duration:3000
    })

  },[])
  

  return (
    <div>
      
    <div className='container'>
      
    <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" href="#"></a>
    
    <img src={reactLogo}></img>
    &nbsp;&nbsp;&nbsp;<span>Shehan</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
      <span className="navbar-toggler-icon"></span>
      
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNav">
    
      <ul className="navbar-nav ms-auto">
      
        <li className="nav-item btn" aria-current="page">
          <a className="nav-link" onClick={() => { setMenu('home')}}>Home <span class="sr-only"></span></a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" onClick={() => { setMenu('lecture')}}>Lectures</a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  <div>
  </div>
  </div>
  <footer01></footer01>
  {component}

  </div>
  )
}

export default App
