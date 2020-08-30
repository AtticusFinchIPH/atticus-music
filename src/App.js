import React, { useEffect, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import Login from './page/login/Login';
import Player from './page/player/Player';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [dataLayer, dispatch] = useDataLayerValue();
  const { user, token } = dataLayer;

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        })
      })
    }
  }, []);
  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
