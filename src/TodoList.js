import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {

    constructor(props){
			super(props);
			this.state = {
					inputValue: '',
					list: []
			};
			this.handleInputChange = this.handleInputChange.bind(this);
			this.handleBtnClick = this.handleBtnClick.bind(this);
			this.handleItemDelete = this.handleItemDelete.bind(this);
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
			axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
				.then((response) => {
					this.setState({
						list: response.data
					})
				})
				.catch((err) => {
					console.log(err)
				})
		}
    
    // react中特有的设置值的方法，this.setState
    handleInputChange (e) {
			// 新版推荐设置方法
			const value = e.target.value
			// const value = this.input.value
			this.setState(() => ({
				inputValue: value
			}))
    }

    handleBtnClick () {
			this.setState((prevState) => ({
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}))
    }

    handleItemDelete (index) {
			// immutable
			// state 不允许我们做任何改变
			this.setState((prevState) => {
				const list = [...prevState.list];
				list.splice(index, 1);
				return {
					list
				}
			})
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