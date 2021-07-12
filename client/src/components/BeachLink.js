import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BeachEditForm from './BeachEditForm'

const BeachLink = (props) => {
    const [formFlag, setFormFlag] = useState(false)
    // console.log({props.beach.id})
    const toggleFormFlag = () => {
        formFlag ? setFormFlag(false) : setFormFlag(true)
    }
    
    const handleClick = () => {
        toggleFormFlag()

    }

    return (
        <div>
            <Link to={`/beaches/${props.beach.id}`}>
                <h2>{props.beach.name}</h2>
            </Link>
            <button className="delete-button" onClick={() => props.deleteBeach(props.beach.id)}>X</button>
            {formFlag ? 
                        <BeachEditForm editBeach={props.editBeach} beach={props.beach}/>
                        :
                        <button onClick={handleClick}>Edit Beach</button>
                    }
            <hr/>
        </div>
    )
}

export default BeachLink