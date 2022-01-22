import React from 'react';

import {ReactComponent as NoTodoItemImage } from './img/notepad.svg'

const Notodoitem = () => {
    return (
        <div className="noTodoItem">
            <NoTodoItemImage />
            <div className="noTodoItem__title">У вас не осталось заметок на сегодня</div>
        </div>
    );
}

export default Notodoitem;
