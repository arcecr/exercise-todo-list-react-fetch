import { Component } from 'react'

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
            taskList: [],
            isLoading: false
        }
    }

    addOrUpdateService(taskList) {
        this.setState({
            isLoading: true
        })
        const urlApi = "https://assets.breatheco.de/apis/fake/todos/user/arcecr";
        fetch(urlApi, {
            method: 'PUT',
            body: JSON.stringify(taskList),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then( 
            () => {
                this.setState({
                    taskList,
                    isLoading: false
                });
            },
            (error) => {
                console.log(error)
            }
        )
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        fetch("https://assets.breatheco.de/apis/fake/todos/user/arcecr")
        .then(res => res.json())
        .then(
            (tasks) => {
                this.setState({
                    taskList: tasks,
                    isLoading: false
                });
            },
            (error) => {
                console.log(error);
            } 
        )
    }

    addTask(task) {
        const newTaskList = [
            ...this.state.taskList,
            {
                label: task,
                done: false
            },
        ]

        this.addOrUpdateService(newTaskList);
    }

    removeTask(label) {
        const newTaskList = this.state.taskList.filter(task => task.label !== label);

        this.addOrUpdateService(newTaskList);
    }

    render() {
        const { isLoading, taskList } = this.state;

        return (
            <div className="todoApp">
                <TodoTitle title="todos" />
                <TodoInput onAdd={this.addTask} />
                <TodoList tasks={taskList} onRemove={this.removeTask} />
                <TodoBottom isLoading={isLoading} taskLength={taskList.length} />
            </div>
        )
    }
}
