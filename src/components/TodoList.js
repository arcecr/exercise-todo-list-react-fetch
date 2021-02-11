import PropTypes from 'prop-types'

import TodoListItem from './TodoListItem'

const TodoList = ({ tasks, onRemove }) => {
    return (
        <ul className="todoList">
            {tasks.map((task, i) => {
                return <TodoListItem key={i} task={task} onRemove={onRemove} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.array,
    onRemove: PropTypes.func
}

export default TodoList
