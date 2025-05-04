import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { StoreContext } from './context/StoreContext'
import DonorLogin from './components/donor/DonorLogin'
import DonorLayout from './pages/donor/DonorLayout'
import AddFood from './pages/donor/AddFood'
import FoodList from './pages/donor/FoodList'
import Orders from './pages/donor/Orders'
import MyOrders from './pages/MyOrders/MyOrders'
import Volunteer from './pages/Volunteer'
import Review from './pages/Review'
import HomeDonor from './pages/donor/HomeDonor'
import Community from './pages/Community'
import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import ViewDonors from './pages/admin/ViewDonors'
import ViewReceivers from './pages/admin/ViewReceivers'
import VolunteerForm from './pages/VolunteerForm'
import Feedback from './pages/Feedback'
import Raise from './pages/Raise'

const App = () => {
  const url="http://localhost:4000"
  const [showLogin, setShowLogin] = useState(false)
  const [showLoginDonor, setShowLoginDonor]=useState(false)
  const [showLoginAdmin, setShowLoginAdmin]=useState(false)
  const isDonerPath = useLocation().pathname.includes("donor");
  const isAdminPath = useLocation().pathname.includes("admin");
  const { isDonor, isAdmin } = useContext(StoreContext)
  return (
    <>
      {
        showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>
      }
      <div className='app'>
        {isDonerPath || isAdminPath ? null : <Navbar setShowLogin={setShowLogin} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/vform' element={<VolunteerForm/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/raise' element={<Raise/>}/>
          <Route path='/donor' element={isDonor ? <DonorLayout /> : <DonorLogin setShowLoginDonor={setShowLoginDonor}/>}>
            <Route index element={isDonor ? <HomeDonor/> : null} />
            <Route path='add-food' index element={<AddFood url={url}/>} />
            <Route path='food-list' index element={<FoodList url={url}/>} />
            <Route path='orders' index element={<Orders url={url}/>} />
          </Route>
          <Route path='/admin' element={isAdmin ? <AdminLayout/> : <AdminLogin setShowLoginAdmin={setShowLoginAdmin}/>}>
            <Route index element={isAdmin ? <ViewDonors url={url}/> : null} />
            <Route path='receiver' index element={<ViewReceivers url={url}/>} />
          </Route>
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      {!isDonerPath && !isAdminPath && <Footer />}
    </>
  )
}

export default App
