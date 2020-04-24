import React, { useState } from 'react';

const Say = () => {
    const [message, setmessage] = useState('');
    const onClickEnter = () => {
        setmessage('홍길동');
    };
    const onClickLeave = () => {
        setmessage('홍길동ㄴㄴㄴㄴㄴ');
    };

    const [color, setColor] = useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>등록</button>
            <button onClick={onClickLeave}>등록1</button>
            <h1 style={{ color }}>{message}</h1>
            <button
                style={{ color: 'red' }}
                onClick={() => {
                    setColor('red');
                }}
            >
                빨강
            </button>
            <button
                style={{ color: 'green' }}
                onClick={() => {
                    setColor('green');
                }}
            >
                초록
            </button>
            <button
                style={{ color: 'blue' }}
                onClick={() => {
                    setColor('blue');
                }}
            >
                파랑
            </button>
        </div>
    );
};

export default Say;
