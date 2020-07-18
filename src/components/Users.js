import React from 'react';
import { CHANGE_MESSAGE, GET_USERS } from './type';
import { getUsers, changeMessage } from './reducer'
import { stateContext } from '../App'

function Users() {

    let { message, dispatch, users } = React.useContext(stateContext)

    return (
        <div>
            <input type="text" placeholder="Enter message" onChange={(e) => {changeMessage(dispatch, CHANGE_MESSAGE, e.target.value)}} />
            <h4>{message}</h4>
            <button type="button" onClick={() => getUsers(dispatch, GET_USERS)}>Get users</button>
            <hr />
            {users ? users.map((item, index) => {
                return <h4 key={index}>{item.name}</h4>
            }) : <h4>No Data</h4>}
        </div>
    )
};

export default Users