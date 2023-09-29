export default function TodoTable(props) {

    const itemRows = props.items.map((todo, index) =>
            <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td>
                <td><button onClick={() => props.onDelete(index)}>Delete</button></td>
            </tr>
    )

    return (
        <>
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