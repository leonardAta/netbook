import React from 'react'
import "./Profile.css"
import Feed from '../../components/center-feed/Feed'
import Nav from '../../components/navbar/Nav'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <> 
      <Nav />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={`${PF}post/4.jpg`} alt="" />
              <img className="profileUserImg" src={`${PF}person/5.png`} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Gina Holden</h4>
              <span className="profileInfoDesc">Happy to be here friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="junior" />
            <Rightbar profile />
          </div>
        </div>
      </div> 
    </>
  )
}

export default Profile
