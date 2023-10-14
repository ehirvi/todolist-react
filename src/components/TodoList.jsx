import { useRef, useState } from "react"
import TodoGrid from "./TodoGrid";
import { Button, TextField, Stack } from "@mui/material/";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from "@mui/icons-material/Delete"
import "dayjs/locale/fi";


function Todolist() {
    const [items, setItems] = useState([]);
    const [todo, setTodo] = useState({ description: "", date: "", priority: "" });

    const gridRef = useRef();

    const handleInputChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const setDate = (date) =>
        date != null && setTodo({ ...todo, ["date"]: date.format("DD.MM.YYYY") })

    const addItem = () =>
        setItems([...items, todo]);
 

    const deleteItem = () => {
        if (gridRef.current.getSelectedNodes().length > 0)
            setItems(items.filter((todo, i) => i != gridRef.current.getSelectedNodes()[0].id));
    }


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
                <Button onClick={deleteItem} variant="contained" startIcon={<DeleteIcon />} style={{ backgroundColor: "red" }} >Delete</Button>

            </Stack>

            <TodoGrid items={items} gridRef={gridRef} />

        </>
    )

}

export default Todolist