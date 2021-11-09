import React from 'react';
import {useState} from "react";

const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter task..."
            />
            <button className="button-add">Add</button>
        </form>
    );
};

export default ToDoForm;