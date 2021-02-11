import PropTypes from 'prop-types'

const TodoListItem = ({ task, onRemove }) => {
    return (
        <li>
            <label>{task.label}</label>
            <button className='remove' onClick={() => onRemove(task.label)}><i className="fas fa-times fa-lg" /></button>
        </li>
    )
}

TodoListItem.propTypes = {
    task: PropTypes.object,
    onRemove: PropTypes.func
}

export default TodoListItem
