import React, {useState, useEffect} from 'react'
import BeachForm from '../components/BeachForm'
import BeachLink from '../components/BeachLink'

const Beaches = () => {
    const [beaches, setBeaches] = useState([])
    const [error, setError] = useState('')
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch('/beaches')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setBeaches(data)
                }
            }  
            else {
                setError("Not authorized")
            }
        })
    }, [])

    const addBeach = (beach) => {
        fetch('/beaches', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beach)
        })
        .then(res => res.json())
        .then(data => {
            setBeaches([...beaches, data])
            // toggleFormFlag()
        })
        toggleFormFlag()
    }

    const deleteBeach = (id) => {
        fetch(`/beaches/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const filteredBeaches = beaches.filter(b => b.id != id)
            setBeaches(filteredBeaches)
        })
    }

    const editBeach = (updatedBeach) => {
        fetch(`/beaches/${updatedBeach.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBeach)
        })
        .then(() => {
            const updatedBeaches = beaches.map(b => b.id === updatedBeach.id ? updatedBeach : b)
            setBeaches(updatedBeaches)
        })
    }

    const toggleFormFlag = () => {
        formFlag ? setFormFlag(false) : setFormFlag(true)
    }

    const beachList = beaches.map(b => <BeachLink key={b.id} beach={b} deleteBeach={deleteBeach} editBeach={editBeach}/>)

    if (error === '') {
        return (
            <div>
                <ul>
                    {beachList}
                    {formFlag ? 
                        <BeachForm addBeach={addBeach}/>
                        :
                        <button onClick={toggleFormFlag}>Add Beach</button>
                    }
                </ul>
            </div>
        )
    }
    else {
        return (
            <h2>Not authorized - please sign up or log in</h2>
        )
    }
    
}

export default Beaches;