import { Bookmark, EventAvailable, RssFeed } from '@material-ui/icons'
import GroupIcon from '@material-ui/icons/Group';
import HelpIcon from '@material-ui/icons/Help';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import SchoolIcon from '@material-ui/icons/School';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import React from 'react'
import "./Sidebar.css"


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledWhiteIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventAvailable className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.png" alt="" />
            <span className="sidebarFriendName">Johnny Sims</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/3.png" alt="" />
            <span className="sidebarFriendName">Meggie Harris</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.png" alt="" />
            <span className="sidebarFriendName">Uche Mason</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/5.png" alt="" />
            <span className="sidebarFriendName">Hallie Warren</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
