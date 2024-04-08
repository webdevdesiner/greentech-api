import React from 'react'
import './style.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='icones'>
    <FaWhatsapp/>
    <FaEnvelope/>
    <FaInstagram/>
    <FaFacebook/>
    </div>
  )
}

export default Footer