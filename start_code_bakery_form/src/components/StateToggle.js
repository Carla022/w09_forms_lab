import {useState} from 'react';

const StateToggleExample = () => {
    let [loggedIn, setLoggedIn] = useState(true);

    const toggleLoggedIn = ()=> {
        setLoggedIn(!loggedIn);
    }
    
    return (
        <>
        <button onClick={toggleLoggedIn}>Toggle Login Status</button>
        <h4>Logged in: {loggedIn.toString()}</h4>
        </>
    );
}

export default StateToggleExample;