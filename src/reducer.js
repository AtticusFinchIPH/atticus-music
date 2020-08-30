export const initialState = {
    user: null,
    playlists: [],
    first_playlist: null,
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_FIRST_PLAYLIST':
            return {
                ...state,
                first_playlist: action.first_playlist,
            }
        default:
            return state;
    }
}

export default reducer;