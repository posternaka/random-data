import data from './json/index';
import generate from './utils/index';

const Eng = () => {
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
            <tr>
                <td>{1}</td>
                <td>{generate.generateId(0, 10, data.id)}</td>
                <td>{generate.generateFullName(0, 10, data.fullName)}</td>
                <td>{generate.generateAddress(0, 10, data.address)}</td>
                <td>{generate.generatePhone(0, 10, data.phone)}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Eng;