import React from 'react'
import Feed from '../../components/center-feed/Feed'
import Nav from '../../components/navbar/Nav'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'
const Home = () => {
  return (
    <> 
      <Nav />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      
    </>
    
  )
}

export default Home
