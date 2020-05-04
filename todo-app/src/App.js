import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './App.css';

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }

    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT': //새로 추가
            //{ type : 'INSERT', todo : { id:1, text:'todo', checked : false}}
            return todos.concat(action.todo);
        case 'REMOVE': //제거
            //{ type : 'REMOVE', id : 1}
            return todos.filter((todo) => todo.id !== action.id);
        case 'TOGGLE': //토글
            // { type: 'TOGGLE', id: 1 }
            return todos.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));
        default:
            return todos;
    }
}

const App = () => {
    //const [todos, setTodos] = useState(createBulkTodos);
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    //고유값 id
    //ref를 사용하여 변수 담기
    const nextId = useRef(4);
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        //setTodos((todos) => todos.concat(todo));
        dispatch({ type: 'INSERT', todo });
        nextId.current += 1;
    }, []);

    //id 활용 지우기
    const onRemove = useCallback((id) => {
        //setTodos((todos) => todos.filter((todo) => todo.id !== id));
        dispatch({ type: 'REMOVE', id });
    }, []);

    //수정
    const onToggle = useCallback((id) => {
        //setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
        dispatch({ type: 'TOGGLE', id });
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
