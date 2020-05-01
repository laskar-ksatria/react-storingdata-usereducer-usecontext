import React from 'react';
import { stateContext } from '../App';
import { getUsers, getPosts } from '../Reducer';
import ListItem from '../components/ListItem';

const Main = () => {

    const globalContext = React.useContext(stateContext);

    const [text, setText] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const getData = (type) => {
        setLoading(true)
        if (type === 'getUsers') {
            getUsers()
                .then(result => {
                    globalContext.dispatchState({type: type, data: result});
                    setLoading(false);
                    setText(type);
                })
                .catch(err => console.log(err))
        }else if (type === 'getPosts') {
            getPosts()
                .then(result => {
                    setLoading(false);
                    globalContext.dispatchState({type: type, data: result})
                    setText(type);
                })
                .catch(err => console.log(err))
        }else {
            setLoading(false);
            alert('Wrong type')
        }
    };

    return (
        <div style={{position: 'sticky'}}>
            <div style={{backgroundColor: '#323232'}}>
            <hr />
            <div style={{height: '50px', backgroundColor: '#e43f5a', display: 'flex', justifyContent: 'center', marginTop: '10px', alignItems: 'center'}}>
               <div>
               <button style={{ marginRight: '20px' }} onClick={() => getData('getUsers')}>getUsers</button>
                <button onClick={() => getData('getPosts')}>getPosts</button>
               </div>
            </div>
            <hr />
            </div>
            {loading ? <h2>Loading...</h2> : <ListItem data={globalContext.state} text={text} />}
        </div>
    )

};


export default Main;