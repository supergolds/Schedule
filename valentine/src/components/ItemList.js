import React, { Component } from 'react';
import TodoItem from './TodoItem'

class ItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        return (
            <div>
                <TodoItem text="안녕"/>
                <TodoItem text="Hello World"/>
                <TodoItem text="안녕 안녕"/>
            </div>
        )
    }
}

export default ItemList;