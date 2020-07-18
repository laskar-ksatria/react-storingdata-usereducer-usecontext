import React from 'react';
import Users from './Users';
import Posts from './Posts';
import { stateContext } from '../App'

function Dashboard() {

    let { message } = React.useContext(stateContext)

    return (
        <div>

            <h1>Dashboard</h1>
                <h1>{message}</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                <Users />
                <Posts />
            </div>
        </div>
    )

};

export default Dashboard;