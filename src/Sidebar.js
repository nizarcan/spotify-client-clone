import React from 'react';
import "./Sidebar.css";
import spotifyLogo from "./assets/spotify-logo.jpg";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { DataLayerValue } from './DataLayer';


function Sidebar() {
    const [{playlists}, dispatch] = DataLayerValue();
    return (
        <div className="sidebar">
            <img src={spotifyLogo} alt="" className="sidebar__logo"/>

            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
        
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name}/>
        ))}


        </div>
    )
}

export default Sidebar
