import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BeachEditForm from './BeachEditForm'

const BeachLink = (props) => {
    const [formFlag, setFormFlag] = useState(false)
    const toggleFormFlag = () => {
        formFlag ? setFormFlag(false) : setFormFlag(true)
    }
    

    // console.log(props)

    return (
        <div>
            <Link to={`/beaches/${props.beach.id}`}>
                <h2>{props.beach.name}</h2>
            </Link>
            <button className="delete-button" onClick={() => props.deleteBeach(props.beach.id)}>X</button>
            {formFlag ? 
                        <BeachEditForm editBeach={props.editBeach} beach={props.beach} toggleFlag={toggleFormFlag}/>
                        :
                        <button onClick={toggleFormFlag}>Edit Beach</button>
                    }
            <hr/>
        </div>
    )
}

export default BeachLink