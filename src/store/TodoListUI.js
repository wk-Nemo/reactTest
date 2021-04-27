import React, {Component} from 'react';

class TodoListUI extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={ this.props.inputValue }
            onChange={ this.props.handleInputChange }
            // ref={(input) => {this.input = input}}
          />
          <button onClick={ this.props.handleBtnClick }>提交</button>
        </div>
        <ul>
            { this.props.getTodoItem(this.props.list) }
        </ul>
      </div>
    )
  }
}

export default TodoListUI
