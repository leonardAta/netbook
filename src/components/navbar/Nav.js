import React from 'react'
import './Nav.css'
import { Chat, Notifications, Person, Search } from '@material-ui/icons'

const Nav = () => {
  return (
    <div className='nav_container'>
      <div className="nav_left">
        <span className="logo">Netbook</span>
      </div>
      <div className="nav_center">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend or post" type="text" className="searchInput" />
        </div>
      </div>
      <div className="nav_right">
        <span className="navLink">Home</span>
        <span className="navLink">Timeline</span>
      </div>
      <div className="navIcon">
        <div className="navIconItem">
          <Person />
          <span className="navIconBadge">1</span>
        </div>
        <div className="navIconItem">
          <Chat />
          <span className="navIconBadge">2</span>
        </div>
        <div className="navIconItem">
          <Notifications />
          <span className="navIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.png" alt="" className="navImg" />
    </div>
  )
}

export default Nav
