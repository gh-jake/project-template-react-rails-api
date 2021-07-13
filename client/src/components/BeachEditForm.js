import React, { useState } from 'react'

const BeachEditForm = (props) => {
    const [id, setID] = useState(props.beach.id)
    const [name, setName] = useState(props.beach.name)
    const [town, setTown] = useState(props.beach.town)
    const [dogFriendly, setDogFriendly] = useState(props.beach.dog_friendly)
    const [hasSnackBar, setHasSnackBar] = useState(props.beach.has_snack_bar)
    const [hasRestrooms, setHasRestrooms] = useState(props.beach.has_restrooms)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.editBeach({
            id: id,
            name: name,
            town: town,
            dog_friendly: dogFriendly,
            has_snack_bar: hasSnackBar,
            has_restrooms: hasRestrooms
        })
        props.toggleFlag()
    }

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
                value={dogFriendly}
                onChange={() => {dogFriendly? setDogFriendly(false) : setDogFriendly(true)}}
                checked={dogFriendly}
            />
            <label>Snack bar?</label>
            <input 
                type="checkbox"
                id="has-snack-bar"
                value={hasSnackBar}
                onChange={() => {hasSnackBar? setHasSnackBar(false) : setHasSnackBar(true)}}
                checked={hasSnackBar}
            />
            <label>Restrooms available?</label>
            <input 
                type="checkbox"
                id="has-restrooms"
                value={hasRestrooms}
                onChange={() => {hasRestrooms? setHasRestrooms(false) : setHasRestrooms(true)}}
                checked={hasRestrooms}
            />
            <input type="submit"/>
        </form>
    )
}

export default BeachEditForm;