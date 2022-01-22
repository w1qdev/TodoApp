import React, { useState } from 'react'

import TodoItem from '../todoItem/TodoItem'
import Addtodoitem from '../addtodoItem/AddTodoItem'
import Notodoitem from '../noTodoItem/NoTodoItem'


function Todo() {

    const [todoList, setTodoList] = useState([
        {id: 1, title: "Купить Молоко", description: "Купить молоко Купить молоко Купить молоко Купить молоко Купить молоко Купить молоко Купить молоко", isCompleted: false},
        {id: 2, title: "Купить Хлеб", description: "Купить Хлеб", isCompleted: false},
        {id: 3, title: "Купить Пиццы", description: "Купить Пиццы", isCompleted: false},
    ])

    return (
        <div className='todo'>
            {todoList.length ? (
                todoList.map(item => (
                    <TodoItem 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        description={item.description} 
                        isCompleted={item.isCompleted} 
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                ))
            ) : (
                <Notodoitem />
            )}
            <Addtodoitem setTodoList={setTodoList} todoList={todoList} />
        </div>
    )
}

export default Todo