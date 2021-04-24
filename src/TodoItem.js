import React, {Component} from 'react'

class TodoItem extends Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.state.content) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    const { content } = this.props;

    return (
      <li
        onClick={this.handleClick}
      >
        {/* 调用父组件传来的数据 */}
        {content}
      </li>
    )
  }

  handleClick () {
    const { deleteItem, index } = this.props;
    // 改变父组件的数据
    deleteItem(index)
  }
}

export default TodoItem;