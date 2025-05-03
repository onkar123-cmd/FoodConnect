import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Banner from '../../components/Banner'
import Banner2 from '../../components/Banner2'

const Home = () => {
    const [category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <Banner/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Banner2/>
        <AppDownload/>
    </div>
  )
}

export default Home