import React, { useState } from 'react'

const Signup = ({onSignup, errors}) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")

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
            if (!user.error) {
                onSignup(user)
            }
            else {
                console.log(user.error)
                setName("")
                setPassword("")
                setPasswordConfirmation("")
                setError(user.error)
            }
            
        })
    }

    // if (errors.length !== 0 && errorsList.length === 0) {
    //     setPassword("")
    //     setPasswordConfirmation("")
    //     const listOfErrors = errors.map(e => <li>{e}</li>)
    //     setErrorsList(listOfErrors)
    // }

    // const listOfErrors = errorsList.map(e => <li>{e}</li>)

    return (
        <div>
            <br/>
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
                <br/>
                <label>Confirm Password</label>
                <input 
                    type="password"
                    id="/passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => {setPasswordConfirmation(e.target.value)}}
                />
                <br/>
                <input type="submit"/>
            </form>
            {error}
        </div>
    )
}

export default Signup;