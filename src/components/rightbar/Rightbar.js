import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import FriendsOnline from '../friends-online/FriendsOnline'

const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return(
      <>
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
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Austin, Texas</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Los Angeles, CA</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">James Aiden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Hammer</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Anna Banner</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Gongzalo Halo</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mimi Hallow</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mimi Hallow</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  )
}

export default Rightbar
