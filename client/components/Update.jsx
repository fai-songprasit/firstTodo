import React from 'react'
import {connect} from 'react-redux'

class Update extends React.Component {
    handleSubmit = () => {
        this.props.dispatch(updateTask(props, id))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>Update</button>
            </div>
        )
    }
}

export default connect()(Update)
