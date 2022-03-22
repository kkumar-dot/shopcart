import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Login from './Login'
// import { connect } from 'react-redux'
import 'dotenv/config'

const Home = () => {
    return (
        <div style={{backgroundColor: "#FFF1C8"}} >
            {console.log("process ========= ",process.env.REACT_APP_LOGIN )}
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home