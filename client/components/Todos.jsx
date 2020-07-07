import React from 'react'

class Todos extends React.Component {
    state = {
        id: ''
    }

        // updateTodos = () => {
    //     getTasks()
        // .then(task => {
        //     this.setState({
        //         tasks: task,
        //     })
        // })
    // }

    // removeTodos = task => {
    //     deleteTask(task)
        // .then(tasks => 
        //     this.setState({tasks}))
    // }

    // handleSubmit = event => {
    //     event.preventDefault()
        // const task = this.state
        // updateTask(task, this.props.id)
        // .then(() => {
        // this.props.updateTask()
        // })
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick = (e) => {
        console.log(e.currentTarget.id)
        if (this.state.id == "") {
            this.setState({
                id: e.currentTarget.id
            })
        } else {
            this.setState ({
                id: ''
            })
        }
    }
    
    render() {
        const task = this.props.data.task
        const priority = this.props.data.priority
        const status = this.props.data.completed
        const upperCaseTask = task.charAt(0).toUpperCase() + task.slice(1)

        return (
            <li id={this.props.data.id} onClick={this.handleClick}>
                <span>
                    {upperCaseTask}
                </span>
                <span>
                    {priority}
                </span>
                <span>
                    {status}
                </span>
            </li>
        )
    }
}

export default Todos