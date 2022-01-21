import React from 'react'
import './sidebar.css'
import { RssFeed, WorkOutline,Event, School, Bookmark, Group, PlayCircleFilledOutlined} from '@material-ui/icons'
import Friends from '../closeFriend/Friends'
import { Users } from '../../dummyData'

export default function SideBar() {
    return (
        <div className='sideBar'> 
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Feed
                    </span> 
                    </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Videos
                    </span>
                
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Group
                    </span>
                
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Bookmarks
                    </span>
                
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Questions
                    </span>
                
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Events
                    </span>
                
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className="sidebarListItemText">
                        Course
                    </span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr  className='sidebarHr'/>
            {Users.map((u)=>
                <Friends key={u.id} user={u}/>
            )}
        </div>
        </div>
    )
}
