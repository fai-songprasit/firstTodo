  import React from 'react'
  import {connect} from 'react-redux'
  import { deleteTasks } from '../actions'

function Delete (props) {
    function handleClick() {
        props.dispatch(deleteTasks(props.id))
    }

    return (
        <div>
            <button className="button" onClick={handleClick}>Delete</button>
        </div>
    )
    
}

export default connect()(Delete)