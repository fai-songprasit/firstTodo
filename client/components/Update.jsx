import React from 'react'
import {connect} from 'react-redux'
import { updateTasks } from '../actions'

class Update extends React.Component { 
    state = {
        id: this.props.task.id,
        task: this.props.task.task,
        priority: this.props.task.priority,
        completed: this.props.task.completed,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(updateTasks(this.state, this.props.task.id))
    }

    render() {
        return (
            <form className="form left_input" onSubmit={this.handleSubmit}>
                <div>
                    <label>Task:</label>
                    <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                </div>
                
                <div>
                    <label>Priority:</label>
                    <input type="text" name="priority" value={this.state.priority} onChange={this.handleChange}/>
                </div>
                
                <div>
                    <label>Completed:</label>
                    <input type="text" name="completed" value={this.state.completed} onChange={this.handleChange}/>
                </div>

                <button className="update">Update</button>
            </form>
        )
    }
}

export default connect()(Update)
