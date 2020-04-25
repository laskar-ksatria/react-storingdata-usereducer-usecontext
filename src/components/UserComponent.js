import React from 'react'
import { StateContext } from '../App'

export default function UserComponent() {
    
    let { users } = React.useContext(StateContext).state;

    return (
        <div>
            {users.length > 0 ? <>
                
               {users.map(item => {
                   return (<div key={item.id}>
                       <h3>{item.id}. {item.name}</h3>
                   </div>)
               })}
            
            </> : <h4>No Data.. Click getUsers button to show users</h4>}
        </div>
    )
}
