import { MoreVert } from '@material-ui/icons'
import React from 'react'
import "./Post.css"

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img className="postProfile" src="/assets/person/1.png" alt="" /> */}
            <span className="postUsername">Mel Auckburn</span>
            <span className="postDate">3 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}

export default Post
