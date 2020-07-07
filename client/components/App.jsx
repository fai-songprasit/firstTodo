import React from 'react'
import List from './List'
import Add from './Add'

import {connect} from 'react-redux'
import { getTasks } from '../apis/todos'
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
        <List tasks={this.props}/>
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