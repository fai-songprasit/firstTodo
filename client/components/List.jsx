import React from 'react'
import Todos from './Todos'
import {connect} from 'react-redux'

const List = (props) => {
    return (
        <div className="todo-list">
            <h1>Todos</h1>
                <div className="header">
                    <div className="header">
                        <p>Task:</p>
                    </div>
                    <div className="header">
                        <p>Priority:</p>
                    </div>
                    <div className="header">
                        <p>Completed:</p>
                    </div>
                </div>
                <ul>
                    {props.tasks.map(todos => {
                        return (
                            <Todos key={todos.id} data={todos}/>
                        )
                    })}
                </ul>
        </div>
    )
}

const mapStateToProps = globalState => ({
    tasks: globalState.tasks
})
export default connect(mapStateToProps)(List)