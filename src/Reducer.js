import axios from 'axios';

export const initialState = {
    users: [],
    posts: [],
};

const baseUrl = "https://jsonplaceholder.typicode.com"

export const reducer = (state, action) => {
    switch(action.type) {
        case 'getUsers':
            return {...state, users: action.data};
        case 'getPosts':
            return {...state, posts: action.data};
        default:
            return state;

    }
};


export const getUsers = () => {
    return new Promise((res, rej) => {
        axios.get(`${baseUrl}/users`)
            .then(({data}) => {
                res(data)
            })
            .catch(err => rej(err));
    })
};

export const getPosts = () => {
    return new Promise((res, rej) => {
        axios.get(`${baseUrl}/posts`)
            .then(({data}) => {
                res(data)
            })
            .catch(err => rej(err));
    });
};