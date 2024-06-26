import React, { useState } from 'react'

export default function TodoInput(props) {
	const {handleAddTodos, todoVal, setTodoVal} = props;
	return (
		<header>
				<input value={todoVal} onChange={
						(e) => setTodoVal(e.target.value)
					}
					placeholder='enter here...' 
				/>
				<button onClick={() => {
					handleAddTodos(todoVal);
					setTodoVal('');
				}}>Add
				</button>
		</header>
	)
}
