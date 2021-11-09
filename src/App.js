import {useEffect, useState} from "react";
import {getToDo} from "./components/api/api";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import Task from "./components/Task";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if ( localStorage.getItem('todos') ) {
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, [])

    const saveToLocalStorage = (data) => {
        localStorage.removeItem('todos');
        localStorage.setItem('todos', JSON.stringify(data));
    }

    const getTask = () => {
        localStorage.removeItem('todos');
        getToDo().then( (response) => {
                localStorage.setItem('todos', JSON.stringify(response));
                setTodos(response);
            }
        )
    }

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                userId: 1,
                id: Date.now(),
                title: userInput,
                completed: false
            }
            setTodos([...todos, newItem]);
            saveToLocalStorage([...todos, newItem]);
        }
    }

    const removeTask = (id) => {
        const newTodos = [...todos.filter((todo) => todo.id !== id)]
        setTodos(newTodos);
        saveToLocalStorage(newTodos);
    }

    const handleToggle = (id) => {
        const newTodos = [
            ...todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
            )
        ]
        setTodos(newTodos);
        saveToLocalStorage(newTodos);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={ () =>
                    <Main
                        todos={todos}
                        getTask={getTask}
                        addTask={addTask}
                        handleToggle={handleToggle}
                        removeTask={removeTask}
                    />
                }/>
                <Route exact path='/task/:id' render={ () =>
                    <Task todos={todos}/>
                }/>
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
