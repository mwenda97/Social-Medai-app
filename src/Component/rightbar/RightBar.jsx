/* eslint-disable no-unused-vars */
import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Onlinep from '../ponline/Onlinep'

export default function RightBar({profile}) {
    const HomeRightBar =()=>{
        return(
            <div>
                <div className="birthDayContainer">
                    <img className='birthDayImg' src="assets/gift.png" alt="" />
                    <span className="birthDayText">
                        <b>Betty </b> and <b> 3 others friends </b> have a birthday today
                    </span>
                </div>
                <img className='rightBarAd' src="assets/ad.png" alt="" />
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="rightBarFriendList">
                        {Users.map((u)=>
                            <Onlinep key={u.id} user={u}/>
                        )}
                </ul>
            </div>
        )
    }

    const ProfileRightBar =()=>{
        return(
            <div>
                <h4 className="rightBarTitle">User infomation</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City</span>
                        <span className="rightBarInfoValue">New York</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From:</span>
                        <span className="rightBarInfoValue">Kanairo</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship:</span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rigthBarFollowingImg" />
                        <span className="rightBarFollowingName">JohnCartel</span>
                    </div>
                </div>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rigthBarFollowingImg" />
                        <span className="rightBarFollowingName">JohnCartel</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightBarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
