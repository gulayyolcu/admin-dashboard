import React from 'react'
import './topbar.css'
import NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">gülayadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                     
                    </div>
                    <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
