import React from 'react';
import "./Body.css";
import Header from "./Header";
import {DataLayerValue} from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from "./SongRow"

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = DataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__playlist">
                <img src={discover_weekly?.images[0]?.url} alt=""/>
                <div className="body__playlistInfo">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
            <div className="body__icons">
                <PlayCircleFilledIcon className="body__playShuffled"/>
                <FavoriteIcon fontSize="large"/>
                <MoreHorizIcon/>
            </div>

            {discover_weekly?.tracks?.items?.map((item) => (
                <SongRow track={item.track} />
            )

            )}
            </div>
        </div>
    )
}

export default Body
