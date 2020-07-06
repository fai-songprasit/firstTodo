  import React from 'react'

function Delete (props) {
    function handleSubmit() {
        props.removeWidget(props.id)
    }

    return (
        <>
            <button onClick={handleSubmit}>Delete</button>
        </>
    )
    
}
export default Delete