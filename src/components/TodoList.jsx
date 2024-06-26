import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
	const {todos} = props;
  return (
    <ul className='main'>
			{todos.map((todo, todoKey) => {
				return(
					<TodoCard {...props} index={todoKey} key={todoKey}>
						<p>{todo}</p>
					</TodoCard>)
			})}
		</ul>
  )
}
