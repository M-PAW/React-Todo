import React from 'react';



const ToDoForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="newItem"
                value={props.newItem}
                onChange={props.handleChanges}
                />
                
                <button>Add</button>

                <button className="clear-btn" onClick={props.deleteTodo}>
                Clear Completed
                </button>
            
        </form>
    );
};
export default ToDoForm;