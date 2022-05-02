import React from 'react'
import './sweet.css'
import Img1 from '../images/sweet-1.jpg'
import Img2 from '../images/sweet-2.jpg'
import Img3 from '../images/sweet-3.jpg'
import { useRef } from 'react'

const Sweet = () => {


  return (
    <div className='sweet'>
      <div className='container'>
        <h2>Sweet For You</h2>
        <div className='flex-sweet'>
          <div className='card-sweet'>
            <img src={Img1} alt='' />
            <div className='img-content'></div>
            <h5>Cake</h5>
            <p>Lorem ipsum dolo elit. Pariatur, consequuntur hic aut similique aspernatur dolorem.</p>
            <p>$9.99</p>
            <button>Order Now</button>
          </div>

          
          <div className='card-sweet'>
            <img src={Img2} alt='' />
            <h5>Cake</h5>
            <p>Lorem ipsum dolo elit. Pariatur, consequuntur hic aut similique aspernatur dolorem.</p>
            <p>$9.99</p>
            <button>Order Now</button>
          </div>

          <div className='card-sweet'>
            <img src={Img3} alt='' />
            <h5>Cake</h5>
            <p>Lorem ipsum dolo elit. Pariatur, consequuntur hic aut similique aspernatur dolorem.</p>
            <p>$9.99</p>
            <button>Order Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sweet