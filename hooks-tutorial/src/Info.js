import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('렌더링됨');
        console.log({
            name,
            nickname,
        });
    });
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input type="text" onChange={onChangeName} />
                <input type="text" onChange={onChangeNickname} />
            </div>

            <div>
                <b>이름:</b>
                {name}
            </div>
            <div>
                <b>닉네임:</b>
                {nickname}
            </div>
        </div>
    );
};

export default Info;
