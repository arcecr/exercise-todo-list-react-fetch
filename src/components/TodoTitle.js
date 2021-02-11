import PropTypes from 'prop-types';

const TodoTitle = ({ title }) => {
    return (
        <div className="todoListTitle">
            <h1>{title}</h1>
        </div>
    )
}

TodoTitle.propTypes = {
    title: PropTypes.string
}

export default TodoTitle
