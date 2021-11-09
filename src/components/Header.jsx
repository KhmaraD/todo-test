import React from 'react';

const Header = ({todos, getTask}) => {
    return (
        <header>
            <h1>list: {todos.length}</h1>
            <button
                className="button-get"
                onClick={() => getTask()}
            >Get new tasks</button>
        </header>
    );
};

export default Header;