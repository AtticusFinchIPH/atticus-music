import React, { useEffect } from 'react';
import './Body.css';
import { useDataLayerValue } from '../../../DataLayer';
import Header from './Header';
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body (props) {
    const { spotify } = props;
    const [dataLayer, dispatch] = useDataLayerValue();
    const { playlists, first_playlist } = dataLayer;

    useEffect(() => {    
      if(playlists?.items?.length > 0 && playlists?.items[0]?.id) {
        spotify.getPlaylist(playlists.items[0].id).then((response) => {
          dispatch({
            type: 'SET_FIRST_PLAYLIST',
            first_playlist: response,
          })
        });
      }
    }, [playlists])

    const playPlaylist = () => {

    }
    return(
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={first_playlist?.images[0]?.url} alt={first_playlist?.name} />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{first_playlist?.name}</h2>
                    <p>{first_playlist?.description}</p>
                </div>
            </div>           
            <div className='body_song'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>
            {first_playlist?.tracks?.items.map(item => 
                <SongRow key={item.id} track={item.track} />
            )}
        </div>
    )
}

export default Body;