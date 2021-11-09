import React from 'react';
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

const Main = ({todos, getTask, addTask, handleToggle, removeTask}) => {
    return (
        <div className="main">
            <Header
                todos={todos}
                getTask={getTask}
            />
            <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
};

export default Main;