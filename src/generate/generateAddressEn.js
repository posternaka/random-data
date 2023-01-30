import { getParams } from '../helpers/getParams';

export const generateAddress = (startSeed, userNumber, { secondaryAddress, buildingNumber, street, cityName, state, zipCode }) => {
    const userIndex = startSeed + userNumber - 1;
    
    const [secondaryAddressStr, buildingNumberStr, streetStr, cityNameStr, stateStr, zipCodeStr] = getParams(userIndex, [secondaryAddress, buildingNumber, street, cityName, state, zipCode]);

    const func = FuncMap[userNumber % 2];
    return func(secondaryAddressStr, buildingNumberStr, streetStr, cityNameStr, stateStr, zipCodeStr);
};

const evenUser = (secondaryAddress, buildingNumber, street ,cityName, state, zipCode) => {
    return `${secondaryAddress} ${buildingNumber} ${street} ${cityName} ${state} ${zipCode}`
}

const oddUser = (secondaryAddress, buildingNumber, street ,cityName, state, zipCode) => {
    return `${buildingNumber}, ${street}, ${cityName} ${state}, ${zipCode}`
}

const FuncMap = 
    {
        0: evenUser,
        1: oddUser
    }