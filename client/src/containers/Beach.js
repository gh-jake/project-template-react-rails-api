import React, {useState, useEffect} from 'react'
// import BeachEditForm from '../components/BeachEditForm'
// import { useHistory, useParams } from 'react-router'

const Beach = (props) => {
    const [beach, setBeach] = useState({})
    const [errors, setErrors] = useState("")
    
    useEffect(() => {
        fetch(`/beaches/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                if (data.errors) {
                    setErrors(data.errors)
                }
                else {
                    setBeach(data)
                }
            }  
            else {
                setErrors("Not authorized")
            }
        })
    }, [])

    const renderBool = (tf) => tf ? "Yes" : "No"

    if (errors === "") {
        return (
            <div>
                <h2>{beach.name}</h2>
                <h3>{beach.town}</h3>
                <h4>Dog friendly? {renderBool(beach.dog_friendly)}</h4>
                <h4>Snack bar? {renderBool(beach.has_snack_bar)}</h4>
                <h4>Restrooms? {renderBool(beach.has_restrooms)}</h4>
            </div>
        )
    }
    else {
        return (
            <h3>{errors}</h3>
        )
    }
    

    
}

export default Beach
