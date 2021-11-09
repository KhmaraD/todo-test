import {NavLink} from "react-router-dom";

const ToDo = ({todo, toggleTask, removeTask}) => {
    return (
        <div key={todo.id} className="item-todo">
            <div
                className={todo.completed ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}>
                {todo.title}
            </div>

            <div className="item-control">
                <div className="item-info"><NavLink to={`/task/${todo.id}`}>Info</NavLink></div>
                <div className="item-delete" onClick={() => removeTask(todo.id)}>
                    X
                </div>
            </div>
        </div>
    )
};

export default ToDo;