import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import FriendsOnline from '../friends-online/FriendsOnline'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/birthday.jpeg" alt="" />
          <span className="birthdayText"><b>Jaden Ola</b> and <b>2 other friends</b> have birthdays today</span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(user => (
            <FriendsOnline key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
