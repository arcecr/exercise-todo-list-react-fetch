import PropTypes from 'prop-types'

const TodoBottom = ({ isLoading, taskLength }) => {
    return (
        <div className="todoListBottom">
            <span className="todoListCount">
                { isLoading 
                ? "Loading..."
                : !taskLength
                    ? "No tasks, add a task"
                    : `${taskLength} ${taskLength > 1 ? "items" : "item"} left`
                }
            </span>
        </div>
    )
}

TodoBottom.propTypes = {
    isLoading: PropTypes.bool,
    taskLength: PropTypes.number
}

export default TodoBottom
