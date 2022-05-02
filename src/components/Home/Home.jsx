import React from 'react'
import Navbar from './Navbar'
import  './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='container'>
        
        <div className='home-content'>
          <h1>GREATEST Pizza</h1>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home