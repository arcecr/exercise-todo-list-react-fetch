import { Component } from 'react'
import { nanoid } from 'nanoid';

import './Todos.css'

import TodoTitle from '../components/TodoTitle'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import TodoBottom from '../components/TodoBottom'

export default class Todos extends Component {
    constructor() {
        super();

        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)

        this.state = {
            taskList: []
        }
    }

    addTask(task) {
        this.setState({
            taskList: [
                ...this.state.taskList,
                {
                    id: nanoid(),
                    name: task
                }
            ]
        })
    }

    removeTask(id) {
        const newTaskList = this.state.taskList.filter(task => task.id !== id);
        this.setState({
            taskList: newTaskList
        })
    }

    render() {
        const { taskList } = this.state;

        return (
            <div className="todoApp">
                <TodoTitle title="todos" />
                <TodoInput onAdd={this.addTask} />
                <TodoList tasks={taskList} onRemove={this.removeTask} />
                <TodoBottom taskLength={taskList.length} />
            </div>
        )
    }
}
