import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    
    if(props.loggedIn) {
        return (
            <div>
                <h1>Hello {props.user.name}</h1>
                <Link>
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