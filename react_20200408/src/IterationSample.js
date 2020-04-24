import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onTxtChange = (e) => setInputText(e.target.value);
    const onTxtAdd = (e) => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const li_Remove = (id) => {
        if (window.confirm('삭제 할거냐?!') === false) {
            return false;
        }
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map((name) => (
        <li key={name.id}>
            {name.text}
            <button onClick={() => li_Remove(name.id)}>삭제</button>
        </li>
    ));
    return (
        <div>
            <input value={inputText} onChange={onTxtChange} />
            <button onClick={onTxtAdd}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;
