import React from 'react'
import Feed from '../feed/Feed'
import RightBar from '../rightbar/RightBar'
import SideBar from '../sidebar/SideBar'
import TopBar from '../topbar/TopBar'
import './profile.css'


export default function Profile() {
    return (
        <div>
            <TopBar/>
            <div className="profile">
                <SideBar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img src="assets/post/4.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>steve Mwenda</h4>
                        <span className="profileInfoDesc">Hello Myfriends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <RightBar profile/>
                </div>
            </div>
            </div>
            
        </div>
    )
}

