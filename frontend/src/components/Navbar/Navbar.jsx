import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)

    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo1} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Food</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <Link to='/volunteer' onClick={()=>setMenu("volunteer")} className={menu==="volunteer"?"active":""}>Volunteer</Link>
            <Link to='/community' onClick={()=>setMenu("community")} className={menu==="community"?"active":""}>Community</Link>
            <Link to='/review' onClick={()=>setMenu("review")} className={menu==="review"?"active":""}>Rating & Review</Link>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {
                !token?
                <div className='navbar-profile'>
                    <button onClick={()=>setShowLogin(true)}>User Sign in</button>
                    <ul className="nav-profile-dropdown">
                        <li onClick={()=>navigate('/donor')}><p>Donor</p></li>
                        <hr />
                        <li onClick={()=>navigate('/admin')}><p>Admin</p></li>
                    </ul>
                </div>
                : <div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar