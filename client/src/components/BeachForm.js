import React, { useState } from 'react'

const BeachForm = ({addBeach}) => {
    const [name, setName] = useState("")
    const [town, setTown] = useState("")
    const [dogFriendly, setDogFriendly] = useState(false)
    const [hasSnackBar, setHasSnackBar] = useState(false)
    const [hasRestrooms, setHasRestrooms] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        addBeach({
            name: name,
            town: town,
            dog_friendly: dogFriendly,
            has_snack_bar: hasSnackBar,
            has_restrooms: hasRestrooms
        })
    }

    // console.log("beachform", name, town, dogFriendly, hasSnackBar, hasRestrooms)

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text"
                id="name"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
            />
            <br/>
            <label>Town</label>
            <input 
                type="text"
                id="town"
                value={town}
                onChange={(e) => {setTown(e.target.value)}}
            />
            <label>Dog friendly?</label>
            <input 
                type="checkbox"
                id="dog-friendly"
                value={town}
                onChange={() => {dogFriendly? setDogFriendly(false) : setDogFriendly(true)}}
            />
            <label>Snack bar?</label>
            <input 
                type="checkbox"
                id="has-snack-bar"
                value={hasSnackBar}
                onChange={() => {hasSnackBar? setHasSnackBar(false) : setHasSnackBar(true)}}
            />
            <label>Restrooms available?</label>
            <input 
                type="checkbox"
                id="has-restrooms"
                value={hasRestrooms}
                onChange={() => {hasRestrooms? setHasRestrooms(false) : setHasRestrooms(true)}}
            />
            <input type="submit"/>
        </form>
    )
}

export default BeachForm;