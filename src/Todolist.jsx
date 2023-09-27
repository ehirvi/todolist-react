import { useState } from "react"
import './Todolist.css'


const Todolist = () => {
    const [items, setItems] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "" });

    const handleInputChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const addItem = () =>
        setItems([...items, todo]);


    const itemRows = items.map((todo, index) =>
        <>
            <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td>
                <td><button onClick={() => setItems(items.filter((todo, i) => i !== index))}>Delete</button></td>
            </tr>
            <hr />
        </>
    )


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

            <button onClick={addItem}>Add</button>
            <table>
                <thead>
                    <tr><th>Date</th><th>Description</th></tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
        </>
    )

}

export default Todolist