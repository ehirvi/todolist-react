import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-material.css"


function TodoGrid({ items, gridRef }) {


    const columns = [
        { headerName: "Description", field: "description", sortable: true, filter: true, floatingFilter: true },
        { headerName: "Date", field: "date", sortable: true, filter: true, floatingFilter: true },
        {
            headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: "red" } : { color: "black" }
        }
    ];


    return (
        <>
            <div className="ag-theme-material"
                style={{ height: "700px", width: "100%", margin: "auto" }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={items}
                    animateRows={true}>
                </AgGridReact>
            </div>
        </>

    )

}

export default TodoGrid