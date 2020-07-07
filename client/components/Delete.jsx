  import React from 'react'
  import {connect} from 'react-redux'
  import { deleteTasks } from '../actions'

function Delete (props) {
    function handleClick() {
        props.dispatch(deleteTasks(props.id))
    }

    return (
        <>
            <button onClick={handleClick}>Delete</button>
        </>
    )
    
}

export default connect()(Delete)