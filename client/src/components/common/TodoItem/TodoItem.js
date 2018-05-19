import React, { Component } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    render() {
        return (
            <div className={`todo-item ${this.props.status == 'completed' ? "completed" : ""}`}>
                <div className="todo-item-container">
                    <Checkbox
                        onChange={this.props.toggleTodoStatus}
                        checked={this.props.status === 'completed'}
                    />
                </div>
                <div className="todo-description">
                    {this.props.description}
                </div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    description: PropTypes.string,
    status: PropTypes.string,
    toggleTodoStatus: PropTypes.func
}

export default TodoItem
