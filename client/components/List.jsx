import React from 'react'
import Update from './Update'

const List = () => {
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
            <Update/>
        </div>
    )
}

export default List