import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholders="할 일을 입력하세요" />
            <button type="button">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
