import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value); //app.js 에서 props로 넘어온 함수 onInsert 에 value값 전달
            setValue(''); //value 값 초기화
            //submit 이벤트는 브라우저에서 새로고침을 발생
            //방지 하기위해 사용
            e.preventDefault();
        },
        [onInsert, value]
    );
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholders="할 일을 입력하세요" value={value} onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
