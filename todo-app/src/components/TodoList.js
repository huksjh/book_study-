import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    console.log(todos);
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                /*      
                console.log(todo);
                result :   
                {id: 1, text: "리액트의 기초 알아보기", checked: true}
                {id: 2, text: "컴포넌트 스타일링해 보기", checked: true}
                {id: 3, text: "일정 관리 앱 만들어 보기", checked: false} */
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;
