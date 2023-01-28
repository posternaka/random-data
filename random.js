const faker = require('@faker-js/faker');
const fs = require('fs');
let str = [];

for (let i=0; i<10; i++) {
  str.push({
        uuid: faker.datatype.uuid(),
        fullName: faker.name.fullName(),
        cityName: faker.address.cityName(),
        streetAddress: faker.address.streetAddress(true), 
        phoneNumber: faker.phone.phoneNumber('+375 29 ###-##-##')
    })
}

fs.writeFile('G:/test.txt', str, function(err) { 
  if(err) return console.log(err); else console.log('file saved');
});