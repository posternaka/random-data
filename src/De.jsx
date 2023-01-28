
const De = ({ faker }) => {
    faker.locale = 'de'; 

    const json = [];

    const secondaryAddress = [];
    const buildingNumber = [];
    const street = [];
    const cityName = [];
    const country = [];
    const zipCode = [];
  
    const data = {
        street,
        buildingNumber,
        secondaryAddress,
        zipCode,
        cityName,
        country
    };
  
    
    const getJson = () => {
      for (let i=0; i<100; i++) {
  
        secondaryAddress.push(faker.address.secondaryAddress());
        buildingNumber.push(faker.address.buildingNumber());
        street.push(faker.address.street());
        cityName.push(faker.address.cityName());
        country.push(faker.address.country());
        zipCode.push(faker.address.zipCode());
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