import React from 'react'
import Img1 from '../../images/product-1.jpg'
import Img2 from '../../images/product-2.jpg'
import Img3 from '../../images/product-3.jpg'

const Sectionfavorite = () => {
  return (
    <div className='section-favorite'>
      <div className='container'>
        <h2>Choose Your faverite</h2>
        <div className='flex-favorite'>
          <div className='card'>
            <img src={Img1} alt='' />
            <h5>Lorem ipsum </h5>
            <p>Lorem consectetur adipisicing elit. Harum, eaque!</p>
            <p className='price'>%9.99</p>
            <button>Order Now</button>
          </div>
          <div className='card'>
            <img src={Img2} alt='' />
            <h5>Lorem ipsum </h5>
            <p>Lorem consectetur adipisicing elit. Harum, eaque!</p>
            <p className='price'>%9.99</p>
            <button>Order Now</button>
          </div>
          <div className='card'>
            <img src={Img3} alt='' />
            <h5>Lorem ipsum </h5>
            <p>Lorem consectetur adipisicing elit. Harum, eaque!</p>
            <p className='price'>%9.99</p>
            <button>Order Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sectionfavorite