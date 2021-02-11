import { useState } from 'react'
import PropTypes from 'prop-types'

const TodoInput = ({ onAdd }) => {
    const [task, setTask] = useState('')

    const handleOnChange = (event) => event && setTask(event.target.value)

    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter' && task) {
            onAdd(task)
            setTask('')
        }
    }

    return (
        <div className="todoInput">
            <input type="text" maxLength="35" onChange={handleOnChange} value={task} onKeyDown={handleOnKeyDown} placeholder="What needs to be done?" />
        </div>
    )
}

TodoInput.propTypes = {
    onAdd: PropTypes.func
}

export default TodoInput
