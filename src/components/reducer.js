import axios from 'axios';
import { GET_POSTS, GET_USERS, CHANGE_MESSAGE } from './type';

const baseUrl = 'https://jsonplaceholder.typicode.com'

export let initialState = {
    users: null,
    posts: null,
    message: ""
};

export const reducer = ((state, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload}
        case GET_USERS:
            return {...state, users: action.payload}
        case CHANGE_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state;
    }
});

export const getUsers = (dispatch, type) => {
    axios.get(baseUrl + '/users').then(({data}) => {
        console.log(data)
        dispatch({type, payload: data})
    })
};

export const getPosts = (dispatch, type) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
        console.log(data)
        dispatch({type, payload: data})
    })
};

export const changeMessage = (dispatch, type, message) => {
    dispatch({type, payload: message})
}