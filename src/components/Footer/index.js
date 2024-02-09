import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import "./style.css";

const Footer = () => {
  return (
    <div className='footerArea'>
        <FaWhatsapp/>
        <FaEnvelope/>
        <FaInstagram/>
        <FaFacebook/>
    </div>
  )
}

export default Footer