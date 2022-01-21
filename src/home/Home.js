import React from 'react'
import SideBar from '../Component/sidebar/SideBar'
import TopBar from '../Component/topbar/TopBar'
import Feed from '../Component/feed/Feed'
import RightBar from '../Component/rightbar/RightBar'
import './Home.css'

export default function Home() {
    return (
        <div>
            <TopBar/>
            <div className="homeContainer">
            <SideBar/>
            <Feed/>
            <RightBar/>
            </div>
            
        </div>
    )
}
