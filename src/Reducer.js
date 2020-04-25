
export const initialState = {
    users: [],
    posts: [],
};


export const reducer = (state,action) => {

    switch(action.type) {
        case 'getUsers':
            return {...state, users: action.data}
        case 'getPosts':
            return {...state, posts: action.data}
        default:
            return state;
    }
}