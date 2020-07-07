import React from 'react'
import Todos from './Todos'
import {connect} from 'react-redux'
// import { updateTask } from '../apis/todos'

//need to adjust this to check which widget matches task name and change just the one
//possibly need to use id? or change the in line change option?
class Update extends React.Component {

    render() {
        console.log(this.props.tasks)
        return (
            <div>
                <ul>
                    {this.props.tasks.map(todos => {
                        return (
                                <Todos key={todos.id} data={todos}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = globalState => ({
    tasks: globalState.tasks
})

export default connect(mapStateToProps)(Update)
