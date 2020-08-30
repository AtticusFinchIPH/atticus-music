import React from 'react';
import './Player.css';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';
import Body from './body/Body';

function Player (props) {
    const { spotify } = props;
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player;