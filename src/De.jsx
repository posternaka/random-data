
const De = ({ faker }) => {
    faker.locale = 'de'; 

    const json = [];

    const uuid = [];
    const firstName = [];
    const lastName = [];
    const city = [];
    const address = [];
    const phone = [];
  
    const data = {
      uuid,
      firstName,
      lastName,
      city,
      address,
      phone
    };
  
    
    const getJson = () => {
      for (let i=0; i<100; i++) {
          const [n, f]= faker.name.fullName().split(' ');
  
          uuid.push(faker.datatype.uuid());
          firstName.push(n);
          lastName.push(f);
          city.push(faker.address.cityName());
          address.push(faker.address.streetAddress(true));
          phone.push(faker.phone.phoneNumber('+49 ## ###-##-##'));


          json.push({
            uuid: faker.datatype.uuid(),
            fullName: faker.name.fullName(),
            cityName: faker.address.cityName(),
            streetAddress: faker.address.streetAddress(true), 
            phoneNumber: faker.phone.phoneNumber('+49 ## ###-##-##')
          })
      }
    }
    
    getJson()
    
    console.log(JSON.stringify(data));
  
  
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
                    json.map((user, index) => (
                          <tr key={user.uuid}>
                              <td>{index + 1}</td>
                              <td>{user.fullName}</td>
                              <td>{user.cityName}</td>
                              <td>{user.streetAddress}</td>
                              <td>{user.phoneNumber}</td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
    )
}

export default De;