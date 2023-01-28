import { generateUsers } from './generateUsers';

const App = () => {
  return (
    <table className='table is-striped is-fullwidth' >
        <thead>
            <tr>
                <th>№</th>
                <th>Name</th>
                <th>City</th>
                <th>Street</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
                {
                    generateUsers(2, 'en', 0, 3).map(it => (
                        <tr key={it.id}>
                            <td>{it.index}</td>
                            <td>{it.id}</td>
                            <td>{it.fullName}</td>
                            <td>{it.address}</td>
                            <td>{it.phone}</td>
                        </tr>
                    ))
                }
        </tbody>
    </table>
  )
}

export default App