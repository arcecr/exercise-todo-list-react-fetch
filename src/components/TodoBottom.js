import PropTypes from 'prop-types'

const TodoBottom = ({ taskLength }) => {
    return (
        <div className="todoListBottom">
            <span className="todoListCount">
                { !taskLength
                ? "No tasks, add a task"
                : `${taskLength} ${taskLength > 1 ? "items" : "item"} left`
                }
            </span>
        </div>
    )
}

TodoBottom.propTypes = {
    taskLength: PropTypes.number
}

export default TodoBottom
