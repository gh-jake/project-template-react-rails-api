import React from 'react'
import { Link } from 'react-router-dom'
import Beach from '../containers/Beach'

const BeachLink = (props) => {
    // console.log({props.beach.id})
    return (
        <div>
            <Link to={`/beaches/${props.beach.id}`}>
                <h2>{props.beach.name}</h2>
            </Link>
            <button className="delete-button" onClick={() => props.deleteBeach(props.beach.id)}>X</button>
            <hr/>
        </div>
    )
}

export default BeachLink