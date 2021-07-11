import React from 'react'

const Beach = (props) => {
    return (
        <div>
            <h1>Beach Component</h1>
            <h2>{props.beach.id}</h2>
        </div>
    )
}

export default Beach
