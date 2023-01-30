import { getParams } from '../helpers/getParams';

export const generateAddress = (startSeed, userNumber, { street, buildingNumber, secondaryAddress, zipCode, cityName }) => {
    const userIndex = startSeed + userNumber - 1;
    
    const [streetStr, buildingNumberStr, secondaryAddressStr, zipCodeStr, cityNameStr] = getParams(userIndex, [street, buildingNumber, secondaryAddress, zipCode, cityName]);

    const func = FuncMap[userNumber % 2];
    return func(streetStr, buildingNumberStr, secondaryAddressStr, zipCodeStr, cityNameStr);
};

const evenUser = (street, buildingNumber, secondaryAddress, zipCode, cityName) => {
    return `${street} ${buildingNumber}, ${zipCode} ${cityName}, Germany`
}

const oddUser = (street, buildingNumber, secondaryAddress, zipCode, cityName) => {
    return `${street} ${buildingNumber}, ${secondaryAddress}, ${zipCode} ${cityName}, Germany`
}

const FuncMap = 
    {
        0: evenUser,
        1: oddUser
    }