import { Tabs, Tab } from "@mui/material"
import { useState } from "react"
import Home from "./Home";
import Todolist from "./TodoList";

function TabApp() {
    
    const [value, setValue] = useState("home");

    const handleChange = (event, value) => {
        setValue(value);
    }
    
    return (
        <>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="home" label="Home"/>
            <Tab value="todos" label="Todos"/>
        </Tabs>
        {value === "home" && <Home/>}
        {value === "todos" && <Todolist/>}
        </>
    )
}

export default TabApp