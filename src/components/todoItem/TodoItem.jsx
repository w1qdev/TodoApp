import React from 'react'

import removeItemBtn from'./img/removeItemBtn.svg'
import completeItemBtn from './img/completeItemBtn.svg'

function TodoItem({ todoList, setTodoList, id, title, isCompleted, description}) {
    
    const removeItem = () => {
        for (let i = 0; i <= todoList.length - 1; i++) {
            if (todoList[i].id === id) {
                const newTodoList = todoList.filter(n => n.id !== id);
                setTodoList([...newTodoList])
            }
        }
    }
 
    const completeItem = () => {
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted
            }
            return item
        }))
    }

    return (
        <div className={isCompleted ? "todoItem bkg-green" : "todoItem"}> 
            <div className="todoItem__info">
                <div className="todoItem__title">{title}</div>
                <div className="todoItem__description">{description}</div>
            </div>
            
            <div className="todoItem__image">
                <img onClick={removeItem} className='image-remove' src={removeItemBtn} alt="remove" />
                <img onClick={completeItem} className='image-complete' src={completeItemBtn} alt="complete" />
            </div>
        </div>
    )
}

export default TodoItem