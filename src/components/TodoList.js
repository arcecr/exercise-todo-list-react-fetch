import PropTypes from 'prop-types'

import TodoListItem from './TodoListItem'

const TodoList = ({ tasks, onRemove }) => {
    return (
        <ul className="todoList">
            {tasks.map(task => {
                return <TodoListItem key={task.id} task={task} onRemove={onRemove} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array,
    onRemove: PropTypes.func
}

export default TodoList
