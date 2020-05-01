import React from 'react';

const ListItem = (props) => {
    if (props.text === 'getUsers') {
        return props.data.users.map(item => {
            return (
                <div key={item.id}>
                    <h4>{item.id}. {item.name}</h4>
                </div>
            )
        })
    }else if (props.text === 'getPosts') {
        return props.data.posts.map(item => {
            return (
                <div key={item.id}>
                    <h4>{item.id}. {item.title}</h4>
                </div>
            )
        })
    }else {
        return (<h2>No Data...</h2>)
    }
};

export default ListItem;