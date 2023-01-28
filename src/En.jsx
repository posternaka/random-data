
const En = ({ faker }) => {
    faker.locale = 'en';

    const json = [];

    const uuid = [];
    const firstName = [];
    const lastName = [];
    const city = [];
    const address = [];
    const phone = [];
    const fullName = [];
    const cityName = [];
    const phoneNumber = [];
    const cityPrefix = [];
    const citySuffix = [];
    const country = [];
    const county = [];
    const direction = [];
    const state = [];
    const street = [];
    const streetAddress = [];
    const streetName = [];
    const streetPrefix = [];
    const streetSuffix = [];
  
    const data = {
      uuid,
      firstName,
      lastName,
      city,
      address,
      phone,
      fullName,
      cityName,
      phoneNumber,
      cityPrefix,
      citySuffix,
      country,
      county,
      direction,
      state,
      street,
      streetAddress,
      streetName,
      streetPrefix,
      streetSuffix
    };
  
    
    const getJson = () => {
      for (let i=0; i<100; i++) {
          const [n, f]= faker.name.fullName().split(' ');
  
          uuid.push(faker.datatype.uuid());
          firstName.push(n);
          lastName.push(f);
          city.push(faker.address.cityName());
          cityPrefix.push(faker.address.cityPrefix());
          citySuffix.push(faker.address.citySuffix());
          county.push(faker.address.county());
          direction.push(faker.address.direction());
          state.push(faker.address.state());
          street.push(faker.address.street());
          streetAddress.push(faker.address.streetAddress());
          streetName.push(faker.address.streetName());
          streetPrefix.push(faker.address.streetPrefix());
          streetSuffix.push(faker.address.streetSuffix());
      
          
          address.push(faker.address.streetAddress(true));
          phone.push(faker.phone.phoneNumber('+1 ### ####-##-##'));
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

export default En