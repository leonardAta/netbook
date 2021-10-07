import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import FriendsOnline from '../friends-online/FriendsOnline'

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship ===1 ? 'Single' : user.relationship ===2 ? 'Married' : '-'}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.png`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">James Aiden</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.png`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Hammer</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.png`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Anna Banner</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.png`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Gongzalo Halo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.png`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mimi Hallow</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.png`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mimi Hallow</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { user ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar
