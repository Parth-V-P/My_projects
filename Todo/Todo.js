import React from 'react'
import { useState} from 'react'


const Todo=()=> {
    const[Todo,setTodo]=useState([])
    const[inputValue,setInputValue]=useState('')
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedValue, setEditedValue] = useState('');

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (editingIndex !== null) {
            const newTodos = [...Todo];
            newTodos[editingIndex] = editedValue;
            setTodo(newTodos);
            setEditingIndex(null); 
            setEditedValue('');
        } else {
            setTodo([...Todo, inputValue]);
            setInputValue(''); 
          }
        };
    

    const handleDelete=(index)=>{
        const newTodos=[...Todo]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }

    const handleEdit = (index) => {
        setEditingIndex(index); 
        setEditedValue(Todo[index]); 
      }

    return (
        <div>
            <h1>list</h1>
                <input type='text' value={editingIndex===null?inputValue:editedValue} onChange={(e)=>(editingIndex===null?setInputValue(e.target.value):setEditedValue(e.target.value))}/>
                <button onClick={handleSubmit}>{editingIndex===null?'ADD':'EDIT'}</button>
            {
            Todo.map((Todo,index) => ( 
            <li key={index}>{Todo}   
                <button onClick={()=>handleEdit(index)}>edit</button>
                <button onClick={() =>handleDelete(index)}>delete</button>
            </li>))}
    </div>
    );
}
export default Todo
