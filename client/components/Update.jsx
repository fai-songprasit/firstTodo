import React from 'react'
import Todos from './Todos'
import {connect} from 'react-redux'
import { updateTask } from '../apis/todos'

//need to adjust this to check which widget matches task name and change just the one
//possibly need to use id? or change the in line change option?
class Update extends React.Component {
    state = {
        clicked: false
    }

    updateTodos = () => {
        getTasks()
        .then(task => {
            this.setState({
                tasks: task,
            })
        })
    }

    removeTodos = task => {
        deleteTask(task)
        .then(tasks => 
            this.setState({tasks}))
    }

    handleSubmit = event => {
        event.preventDefault()
        const task = this.state
        updateTask(task, this.props.id)
        .then(() => {
        this.props.updateTask()
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    editClick = () => {
        if (this.state.clicked == false) {
            this.setState({
                clicked: true
            })
        } else if (this.state.clicked == true) {
            this.setState({
                clicked: false
            })
        }
    }

    render() {
        console.log(this.props.tasks)
        return (
            <div>
                {this.props.tasks.map(todos => {
                    return <Todos key={todos.id} data={todos} removeTodos={this.removeTodos} updateTodos={this.updateTodos}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = globalState => ({
    tasks: globalState.tasks
})

export default connect(mapStateToProps)(Update)
