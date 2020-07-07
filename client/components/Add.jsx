import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

class Add extends React.Component {
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
        this.props.dispatch(addTask(this.state))
    }

    handleClick = (e) => {
        this.props.clicked.clicked = false
    }

    render () {
        return (
            <>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Task:  </label>
                        <input type="text" name="task" placeholder="e.g. Grocery" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                        <label>Priority:  </label>
                        <input type="text" name="priority" placeholder="e.g. medium" value={this.state.priority} onChange={this.handleChange}/>
                    </div>
                    
                    <div>
                        <label>Completed:  </label>
                        <input type="text" name="completed" placeholder="yes/no" value={this.state.completed} onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" onClick={this.handleClick}>ADD</button>
                </form>
            </>
        )
    }
}

export default connect()(Add)