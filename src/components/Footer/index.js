
import './styles.css'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (


      <div className='footerArea'>       
        <FaWhatsapp className='iconeMedio'/>
        <FaEnvelope className='iconeMedio'/>
        <FaInstagram className='iconeMedio'/>
        <FaFacebook className='iconeMedio'/>
      </div>
  )
}

export default Footer