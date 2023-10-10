import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-material.css"
import { useRef } from "react";


function TodoGrid(props) {
    

    const columns = [
        {headerName: "Description", field: "description", sortable: true, filter: true, floatingFilter: true},
        {headerName: "Date", field: "date", sortable: true, filter: true, floatingFilter: true},
        {headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? {color: "red"} : {color: "black"}}
    ];

    const gridRef = useRef();

    const deleteSelected = () => {
        if (gridRef.current.getSelectedNodes().length > 0)
            props.onDelete(gridRef.current.getSelectedNodes()[0].id)
    }

    return (

        <>
            <button onClick={deleteSelected}>Delete</button>
            <div className="ag-theme-material"
                style={{height: "700px", width: "115%", margin: "auto"}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={props.items}
                    animateRows={true}>
                </AgGridReact>


            </div>
        </>

    )

}

export default TodoGrid