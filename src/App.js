import React, {useState} from "react"
import TodoItem from "./Component/Todoitem"


const App = () => {
    const [todos , setTodos ] = useState (todosArray) ;
    const[todoTitle,setTodoTitle] =useState('')


    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id)) ;
    }


    const handleEditTodo = (data) => {
        setTodos(todos.map(el => el.id === data.id ? data : el)) ;
    }
    const handleAddTodo = () =>{
        const newTodo ={
            id:todos.length + 1,
            title:todoTitle,
            completed:false
        }
        setTodos([...todos,newTodo])
        setTodoTitle('')
    }

    return (
        <div>
            <div>
                <h1>Todo App </h1>

               <div className={'card'}>
                  <div> <input onChange={(e)=> setTodoTitle(e.target.value)} type="text"
                               defaultValue={todoTitle}
                               value={todoTitle}
                  /></div>
                   <div><button onClick={handleAddTodo}>
                       Add
                   </button></div>
               </div>
                {
                    todos.map((todo , idx ) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            handleEditTodo={handleEditTodo}
                        />
                    )
                }
            </div>
        </div>
    )

}

export default App;

const todosArray = [
    {
        id: 1,
        title: 'Todo 1',
        completed: true
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false
    }

]