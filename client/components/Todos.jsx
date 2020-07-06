import React from 'react'

const Todos = (props) => {
    const task = props.data.task
    const priority = props.data.priority
    const status = props.data.completed
    const upperCaseTask = task.charAt(0).toUpperCase() + task.slice(1)
    return (
        <>
            <ul>
                <li>
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
            </ul>
        </>
    )
}

export default Todos