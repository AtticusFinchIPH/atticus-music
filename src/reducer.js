export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQCvun3TKZvYASUw6LunePB1rvwjtJj58vICwmpPDL52A5wE9g6KAX_aK_D8dy-Du55COz2bDKKqCHNDmLWRhyVHHQMGWqoIK0TishJ8ui35Gphr3oGD6gKtO_LeNAvGlbzVud0iYB8SsvJG8DfBEtxd2KCn7QhATtxoW-91Mp78i5Wy6kZe',
}

const reducer = (state, action) => {
    console.log(action);
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
        default:
            return state;
    }
}

export default reducer;