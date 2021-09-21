import React from 'react'
import "./FriendsOnline.css"

const FriendsOnline = ({ user }) => {
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}

export default FriendsOnline
