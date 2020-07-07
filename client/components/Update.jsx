import React from 'react'
import {connect} from 'react-redux'
import { updateTasks } from '../actions'

class Update extends React.Component { 
    state = {
        task: '',
        priority: '',
        completed: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(updateTasks(this.state, this.props.id))
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label>Task:</label>
                    <input type="text" name="task" value={this.props.name} onChange={this.handleChange}/>
                </div>
                
                <div>
                    <label>Priority:</label>
                    <input type="text" name="priority" value={this.props.priority} onChange={this.handleChange}/>
                </div>
                
                <div>
                    <label>Completed:</label>
                    <input type="text" name="completed" value={this.props.completed} onChange={this.handleChange}/>
                </div>

                <button className="button">Update</button>
            </form>
        )
    }
}

export default connect()(Update)
