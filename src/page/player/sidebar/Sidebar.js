import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from '../../../DataLayer';

function Sidebar () {
    const [dataLayer, dispatch] = useDataLayerValue();
    const { playlists } = dataLayer;
    return(
        <div className="sidebar">
            <img className="sidebar_logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='sidebar_logo'></img>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr />
            {
                playlists?.items?.map(playlist => 
                    <SidebarOption title={playlist.name} />
                )
            }
        </div>
    )
}

export default Sidebar;