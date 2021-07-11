import React, { useState } from 'react'

const Login = ({onLogin}) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault() //tries to send a post request
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
            })
        })
        .then(r => r.json())
        .then(user => onLogin(user))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text"
                id="/name"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
            />
            <br/>
            <label>Password</label>
            <input 
                type="text"
                id="/password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
            
            <input type="submit"/>
        </form>
    )
}

export default Login;