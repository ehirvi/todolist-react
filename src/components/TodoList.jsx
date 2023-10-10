import { useState } from "react"
// import '../Todolist.css'
// import TodoTable from "./TodoTable";
import TodoGrid from "./TodoGrid";


const Todolist = () => {
    const [items, setItems] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "", priority: "" });

    const handleInputChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const addItem = () =>
        setItems([...items, todo]);

    const deleteItem = (index) =>
        setItems(items.filter((todo, i) => i != index));


    return (
        <>
            <h1>Todolist</h1>

            <input
                type="text"
                name="description"
                value={todo.description}
                onChange={handleInputChange} />
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleInputChange} />
            <input
                type="text"
                name="priority"
                value={todo.priority}
                onChange={handleInputChange}
            />

            <button onClick={addItem}>Add</button>

            {/* <TodoTable items={items} onDelete={deleteItem}/> */}
            <TodoGrid items={items} onDelete={deleteItem}/>
             
        </>
    )

}

export default Todolist