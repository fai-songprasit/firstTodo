import React from 'react'
import {connect} from 'react-redux'
import { updateTask } from '../apis/todos'

//need to adjust this to check which widget matches task name and change just the one
//possibly need to use id? or change the in line change option?
class Update extends React.Component {
    state = {
        clicked: false
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
        console.log(this.props.store)
        return (
            <div>
                <p>Need to make redux work, create reducers, routes etc.</p>
            </div>
        )
    }
}

const mapStateToProps = globalState => ({
    tasks: globalState.tasks
})

export default connect(mapStateToProps)(Update)
