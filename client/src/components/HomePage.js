import React, { Component } from 'react';
import Countdown from './Countdown'
import TodoItem from './common/TodoItem/TodoItem';
import { connect } from 'react-redux'
import { addNewTodo, fetchTodos, toggleTodoStatus } from '../actions/todoActions'
import DepartingFlightInfo from './DepartingFlightInfo';
import ReturningFlightInfo from './ReturningFlightInfo';

class HomePage extends Component {
  state = {
    newTodo: null
  }

  handleSubmit = (e) => {
    if (e.key === "Enter") {
      const data = {};
      data.description = e.target.value
      this.props.addNewTodo(data);
    }
  }

  componentDidMount = () => {
    this.props.fetchTodos();
  }

  handleTodoCheck = (data) => {
    console.log(data)
    this.props.toggleTodoStatus(data)
  }

  render() {
    const { todos: { data } } = this.props;
    const todos = data.map(todo => {
      return (
        <TodoItem
          key={todo._id}
          description={todo.description}
          status={todo.status}
          toggleTodoStatus={() => this.handleTodoCheck(todo._id)}
        />
      )
    })

    return (
      <div className="home-page">
        <div className="spacer"></div>
        <div className="container">
          <div className="todos">
            <div className="todo-container">
              <div className="add-container">
                <i className="fas fa-plus add-icon"></i>
                <input
                  type="text"
                  className="add-todo"
                  onChange={(e) => this.setState({ newTodo: e.target.value })}
                  value={this.state.newTodo || ""}
                  placeholder="Add Something!"
                  onKeyPress={this.handleSubmit}
                />
              </div>
              <div className="todo-list">
                {todos}
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="countdown">
              <Countdown date={`${2018}-08-21T16:45:00`} />
            </div>
            <div className="flight-info-container">
              <DepartingFlightInfo />
            </div>
            <div className="separator-container">
              <div className="flight-info-separator"></div>
              <span className='flight-separator-text'>Ireland - London - Paris</span>
            </div>
            <div className="flight-info-container">
              <ReturningFlightInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { addNewTodo, fetchTodos, toggleTodoStatus })(HomePage)
