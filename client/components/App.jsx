import React from 'react'
import Todos from './Todos'
import Add from './Add'
import Update from './Update'
import {connect} from 'react-redux'
import { getTasks, deleteTask } from '../apis/todos'
import { fetchTasks } from '../actions'

class App extends React.Component {

  componentDidMount() {
    console.log('component did mount')
    getTasks()
      this.props.dispatch(fetchTasks())
  }

  render() {
    console.log('render')
    return (
      <div className="app">
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
            <Update/>
        </div>
        <div className="form">
          <Add/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => ({
  tasks: globalState.tasks
})

export default connect(mapStateToProps)(App)