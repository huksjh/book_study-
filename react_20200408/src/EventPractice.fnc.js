import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        username2: '',
        userinfo: '',
    });
    const { username, username2, userinfo } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        // console.log(nextForm);
        setForm(nextForm);
    };

    const onClick = (e) => {
        alert(username + ' : ' + userinfo);
        setForm({
            username: '',
            username2: '',
            userinfo: '',
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>입력해봐</h1>
            <input type="text" name="username" placeholder="이름입력" value={username} onChange={onChange} />
            <input type="text" name="username2" placeholder="이름입력" value={username2} onChange={onChange} />
            <input type="text" name="userinfo" placeholder="아무거나 입력" value={userinfo} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
