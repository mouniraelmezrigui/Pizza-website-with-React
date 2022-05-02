import React from 'react'
import { BsFacebook} from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='flex-footer'>
          <h3>Pizza</h3>
          <div>
            <BsFacebook className='icon' />
            <FiInstagram className='icon' />
            <AiFillYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer