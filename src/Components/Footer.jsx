import React from 'react'
import dh from '../images/DH.png'
import fb from '../images/ico-facebook.png'
import ig from '../images/ico-instagram.png'
import tt from '../images/ico-tiktok.png'
import wp from '../images/ico-whatsapp.png'
const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={dh} alt='DH-logo' />
        <div className='icons'>
          <img src={fb} alt="facebook" />
          <img src={ig} alt="instagram" />
          <img src={tt} alt="tiktok" />
          <img src={wp} alt="whatsApp" />
        </div>
    </footer>
  )
}

export default Footer
