import { MoreVert } from '@material-ui/icons'
import React, {useState} from 'react'
import './post.css'
import {Users} from '../../dummyData'

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setisLiked] = useState(false)

    const likedHandler =()=>{
        setLike(isLiked ? like -1 : like +1)
        setisLiked(!isLiked)
    }
    const user = Users.filter(u=>u.id===1)
    console.log(user[0].username)
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id === post.id)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUserName">
                            {Users.filter((u)=>u.id === post.id)[0].username}
                        </span>
                        <span className="postDate">
                            {post.date}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postbottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" onClick={likedHandler}  />
                        <img src="assets/heart.png" alt="" className="likeIcon" onClick={likedHandler} />
                        <span className="postLikeCounter">
                            {like} people like it
                        </span>
                    </div>
                    <div className="postbottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
