import React from 'react'
import burgerBg from './assets/burgerBg.jpg';
import './Sub.css';
const Sub = () => {
  return (
    <div>
      <img src={burgerBg} alt='burgerbg' className='bg'/>
      <p className='title'>Bir hamburgeri başka bir insanla paylaşmak, <br/>hafifçe izin verilmemesi gereken samimi bir eylemdir.</p>
    </div>
  )
}

export default Sub
