import {useState} from "react";


const TodoItem = ({todo, deleteTodo, handleEditTodo}) => {
    const [edit , setEdit] = useState (false)
    const [editTitle , setEditTitle ] = useState(todo.title)

    const handleEdit = () => {
        if (!edit) {
            setEdit (!edit)
            setEditTitle (!edit)
        } else {
            const newData = {...todo, title: editTitle}
            handleEditTodo (newData)
            setEdit (false)

        }
    }




    return (
        <div
            style={{
                display: 'flex' ,
                gap: '15px' ,
                alignItems: 'center',
                padding: '15px'
            }}
        >

            <div style={{
                width: '200px'
            }}>
                { edit ?
                    <input
                        defaultValue={todo.title}
                        type="text"
                        onChange={(e)  => setEditTitle(e.target.value)}
                    />
                    :
                    <h3>{todo.title}</h3>
                }

            </div>
            <input type="checkbox"
                   checked={todo.completed.type}
            />

            <button
                onClick={handleEdit}
            > {edit ? 'save' : 'edit'}
            </button>

            <button
                className={'btn'}
                onClick={() => deleteTodo (todo.id)}
            >
                delete
            </button>
        </div>
    )
}
export default TodoItem ;