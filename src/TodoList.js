import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// import axios from 'axios'
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator'

class TodoList extends Component {

    constructor(props){
			super(props);
			this.state = store.getState();
			this.handleInputChange = this.handleInputChange.bind(this);
			this.handleBtnClick = this.handleBtnClick.bind(this);
			this.handleItemDelete = this.handleItemDelete.bind(this);
			this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    // JSX语法
    // 一些标签
    // 绑定value
    // 绑定事件--->修改this指向
    // Fragment占位符
    render() {
        return (
					// 占位符
					<Fragment>
							<div>
									<input
										value={ this.state.inputValue }
										onChange={ this.handleInputChange }
										// ref={(input) => {this.input = input}}
									/>
									<button onClick={ this.handleBtnClick }>提交</button>
							</div>
							<ul>
									{ this.getTodoItem() }
							</ul>
					</Fragment>
        )
    }

		componentDidMount() {
			// axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
			// .then((response) => {
			// 	this.setState({
			// 		list: response.data
			// 	})
			// })
			// .catch((err) => {
			// 	console.log(err)
			// })
			store.subscribe(this.handleStoreChange);
		}
    
    // react中特有的设置值的方法，this.setState
    handleInputChange (e) {
			const action = getInputChangeAction(e.target.value);
			store.dispatch(action);
			// this.setState(() => ({
			// 	inputValue: value
			// }))
    }

    handleBtnClick () {
			const action = getAddItemAction();
			store.dispatch(action);
			// this.setState((prevState) => ({
			// 	list: [...prevState.list, prevState.inputValue],
			// 	inputValue: ''
			// }))
    }

    handleItemDelete (index) {
			// immutable
			// state 不允许我们做任何改变
			const action = getDeleteItemAction(index)
			store.dispatch(action)
			// this.setState((prevState) => {
			// 	const list = [...prevState.list];
			// 	list.splice(index, 1);
			// 	return {
			// 		list
			// 	}
			// })
    }

		handleStoreChange () {
			this.setState(store.getState())
		}

		getTodoItem () {
			return this.state.list.map((item, index) => {
				return (
					// 父组件向子组件传值，通过属性的方式
					// 子组件向父组件传值
					<TodoItem
						content={item}
						index={index}
						deleteItem={this.handleItemDelete.bind(this)}
						key={index}
					/>
				)
			})
		}
}
export default TodoList