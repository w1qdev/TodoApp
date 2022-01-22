import React, {useState, useEffect} from 'react';

const Addtodoitem = ({ setTodoList, todoList }) => {

    const [isAdditing, setIsAdditing] = useState(false)
    const [isInputsClear, setIsInputsClear] = useState(true)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // Checking for empty inputs
    useEffect(() => {
        title ? setIsInputsClear(false) : setIsInputsClear(true)
    }, [title])

    const createNewItem = (e) => {
        setTodoList([...todoList, {id: Date.now(), title, description, isCompleted: false}])
        setTitle('')
        setDescription('')
        setIsAdditing(false)
    }

    return (
        <div>
            {isAdditing ? (
                <div className='create-item'>
                    <div className="create-item__info">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='input title' type="text" placeholder='Заголовок'/>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} className='input description' type="text" placeholder='Описание' />
                    </div>

                    <div className="create-item__addBtn">
                        <button onClick={isInputsClear ? null : createNewItem} className={isInputsClear ? "button disabled" : "button enabled"}>Добавить</button>
                    </div>
                    
                </div>
            ) : (
                <div onClick={() => setIsAdditing(true)} className='addTodoItem'>
                    <div className="add-title">Добавить карточку</div>
                </div>
            )}
        </div>
    );
}

export default Addtodoitem;
