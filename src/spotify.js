// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

const REDIRECT_URI = 'http://localhost:3000/';
const SPOTIFY_ID = process.env.REACT_APP_SPOTIFY_ID;

const SCOPES = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const LOGIN_URL = `${AUTH_ENDPOINT}?client_id=${SPOTIFY_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;