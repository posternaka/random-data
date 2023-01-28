import './Ru/utils/index';

const Ru = ({ faker }) => {
  faker.locale = 'ru';

  const uuid = [];
  const firstName = [];
  const lastName = [];
  const cityName = [];
  const phoneNumber = [];
  const state = [];
  const streetName = [];
  const streetSuffix = [];
  const building = [];

  const data = {
    uuid,
    firstName,
    lastName,
    cityName,
    phoneNumber,
    state, 
    building,
    streetName,
    streetSuffix
  };

  
  const getJson = () => {
    for (let i=0; i<100; i++) {

        const [f, l] = faker.name.fullName().split(' ');

        uuid.push(faker.datatype.uuid());
        firstName.push(f);
        lastName.push(l);
        cityName.push(faker.address.cityName());
        phoneNumber.push(faker.phone.number('###-##-##'));
        state.push(faker.address.state());
        building.push(faker.address.buildingNumber());
        streetName.push(faker.address.streetName());
        streetSuffix.push(faker.address.streetSuffix());
    }
  }
  
  getJson()
  
  // console.log(JSON.stringify(data));


  return (
    <div></div>
    // <table className='table is-striped is-fullwidth' >
    //         <thead>
    //             <tr>
    //                 <th>№</th>
    //                 <th>Name</th>
    //                 <th>City</th>
    //                 <th>Street</th>
    //                 <th>Phone</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {
    //               json.map((user, index) => (
    //                     <tr key={user.uuid}>
    //                         <td>{index + 1}</td>
    //                         <td>{user.fullName}</td>
    //                         <td>{user.cityName}</td>
    //                         <td>{user.streetAddress}</td>
    //                         <td>{user.phoneNumber}</td>
    //                     </tr>
    //                 ))
    //             }
    //         </tbody>
    //     </table>
  )
}

export default Ru;