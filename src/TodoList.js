import React, { Component, Fragment } from 'react';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: 'asdasd',
            list: []
        }
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
                     value={this.state.inputValue}
                     onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>ajhd</li>
                    <li>asjdhksahd</li>
                </ul>
            </Fragment>
        )
    }
    
    // react中特有的设置值的方法，this.setState
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
}
export default TodoList