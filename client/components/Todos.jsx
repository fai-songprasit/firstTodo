import React from 'react'
import Delete from './Delete'
import Update from './Update'

class Todos extends React.Component {
    state = {
        id: '',
        clicked: false
    }

    handleClick = (e) => {
        console.log(e.currentTarget.id)
        if (this.state.id == "") {
            this.setState({
                id: e.currentTarget.id,
                clicked: true
            })
        } else {
            this.setState ({
                id: '',
                clicked: false
            })
        }
    }
    
    render() {
        const task = this.props.data.task
        const priority = this.props.data.priority
        const status = this.props.data.completed
        const upperCaseTask = task.charAt(0).toUpperCase() + task.slice(1)

        return (
            <>
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
                {this.state.clicked ? 
                    <div className="flex">
                        <Delete id={this.state.id}/>
                        <Update id={this.state.id} task={this.props.task}/>
                    </div>
                    : null
                }
            </>
        )
    }
}

export default Todos