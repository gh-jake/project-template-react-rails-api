import React, { useState } from 'react'

const Signup = ({onSignup, errors}) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault() //tries to send a post request
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(r => r.json())
        .then(user => {
            if (!user.errors) {
                onSignup(user)
            }
            else {
                setPassword("")
                setPasswordConfirmation("")
                const listOfErrors = user.errors.map(e => <li>{e}</li>)
                setErrorsList(listOfErrors)
            }
            
        })
    }

    // if (errors.length !== 0 && errorsList.length === 0) {
    //     setPassword("")
    //     setPasswordConfirmation("")
    //     const listOfErrors = errors.map(e => <li>{e}</li>)
    //     setErrorsList(listOfErrors)
    // }

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
                type="password"
                id="/password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <label>Confirm Password</label>
            <input 
                type="password"
                id="/passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => {setPasswordConfirmation(e.target.value)}}
            />
            <input type="submit"/>
        </form>
    )
}

export default Signup;