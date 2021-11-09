import React from 'react';
import {withRouter} from "react-router-dom";

const Task = (props) => {
    const idTask = +props.match.params.id;
    const selectedTask = props.todos.find(item => item.id === idTask);

    return (
        <div className="task-item">
            <h2>Task id: {selectedTask.id}</h2>
            <p>{selectedTask.title}</p>
            { (selectedTask.completed)
                ? <p className="color-green">Task is completed!</p>
                : <p className="color-red">Task not completed! Work better!</p>
            }
            <button
                onClick={() => props.history.goBack()}
                className="back-btn"
            >Back to list</button>
        </div>
    );
};

export default withRouter(Task);