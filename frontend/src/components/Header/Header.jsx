import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  return (
    <div className='header'>
        <div className="header-contents">
            <h1>Food Connect</h1>
            <p>Food Connect is a compassionate food donation platform dedicated to addressing food insecurity and hunger-related issues in India. At Food Connect, we believe that every individual deserves access to nutritious meals and the basic necessity of food. With this ethos at our core, we've established a platform that serves as a bridge between those in need and generous donors willing to make a difference.</p>
            <button onClick={()=>navigate('/donor')} className='cursor-pointer'>Donate</button>
        </div>
    </div>
  )
}

export default Header