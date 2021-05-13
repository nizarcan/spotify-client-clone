export const initialState = {

    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: ""
    // change into null after finishing
};

const reducer = (state, action) => {
    console.log(action);

    // action = {type: e.g. 'SET_USER' , [payload]: e.g. {user: 'nizarcan', id: 'xxx', ...} }
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }

}

export default reducer;