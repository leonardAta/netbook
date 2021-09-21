import React from 'react'
import "./Rightbar.css"

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
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amaka Holdings</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amaka Holdings</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amaka Holdings</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amaka Holdings</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amaka Holdings</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.png" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Amaka Holdings</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
