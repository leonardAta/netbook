import React from 'react'
import "./FriendsOnline.css"

const FriendsOnline = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={PF+user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}

export default FriendsOnline
