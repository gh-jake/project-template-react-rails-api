import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
    
    if(props.loggedIn) {
        return (
            <div>
                <h1>Hello {props.user.name}</h1>
                <br/>
                <button onClick={props.logOutUser}>Log Out</button>
                <Link to="/beaches">
                    <button>Beaches</button>
                </Link>
            </div>
        )
    }
    else {
        return (
            <div>
                <br/>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button>Log In</button>
                </Link>
            </div>
        )
    }

    
}

export default NavBar;