  
import React from 'react'
import {connect} from 'react-redux'

const Error = (props) => {
  return (
    <div className='error'>
      {props.errorMessage}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(Error)