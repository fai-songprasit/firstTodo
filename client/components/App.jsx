import React from 'react'
import List from './List'
import Add from './Add'

import {connect} from 'react-redux'
import { getTasks } from '../apis/todos'
import { fetchTasks } from '../actions'

class App extends React.Component {
  state = {
    clicked: false
  }

  componentDidMount() {
    console.log('component did mount')
    getTasks()
      this.props.dispatch(fetchTasks())
  }

  handleClick = (e) => {
    if (this.state.clicked == true) {
      this.setState ({
        clicked: false
      })
    } else {
      this.setState ({
        clicked: true
      })
    }
  }

  render() {
    console.log('render')
    return (
      <div className="app">
        <List tasks={this.props}/>
      <button className="button" onClick={this.handleClick}>Create</button>
      {this.state.clicked &&
        <div className="form">
          <Add clicked={this.state}/>
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (globalState) => ({
  tasks: globalState.tasks,
})

export default connect(mapStateToProps)(App)