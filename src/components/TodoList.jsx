import { useState } from "react"
import TodoGrid from "./TodoGrid";
import { Button, TextField, Stack } from "@mui/material/";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/fi";


function Todolist() {
    const [items, setItems] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "", priority: "" });

    const handleInputChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const setDate = (date) =>
        date != null && setTodo({ ...todo, ["date"]: date.format("DD.MM.YYYY") })

    const addItem = () =>
        setItems([...items, todo]);

    const deleteItem = (index) =>
        setItems(items.filter((todo, i) => i != index));


    return (
        <>
            <h1>Todolist</h1>

            <Stack direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center">

                <TextField
                    label="Description"
                    variant="standard"
                    name="description" value={todo.description}
                    onChange={handleInputChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
                    <DatePicker label="Date" onChange={date => setDate(date)} />
                </LocalizationProvider>
                <TextField
                    label="Priority"
                    variant="standard"
                    name="priority" value={todo.priority}
                    onChange={handleInputChange}
                />

                <Button onClick={addItem} variant="contained">Add</Button>

            </Stack>

            <TodoGrid items={items} onDelete={deleteItem} />

        </>
    )

}

export default Todolist