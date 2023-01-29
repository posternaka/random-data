export const generateAddress = (startSeed, userNumber, { secondaryAddress, buildingNumber, street, cityName, state, zipCode }) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (secondaryAddress.length * buildingNumber.length * street.length * cityName.length * state.length * zipCode.length);
    const secondaryAddressLength = allLength / secondaryAddress.length;
    const buildingNumberLength = secondaryAddressLength / buildingNumber.length;
    const streetLength = buildingNumberLength / street.length;
    const cityNameLength = streetLength / cityName.length;
    const stateLength = cityNameLength / state.length;

    const validUserNumber = userIndex % allLength;
    const secondaryAddressRes = Math.floor(validUserNumber / secondaryAddressLength);
    const buildingNumberRes = Math.floor((validUserNumber % secondaryAddressLength) / buildingNumberLength);
    const streetRes = Math.floor((validUserNumber % secondaryAddressLength % buildingNumberLength) / streetLength);
    const cityNameRes = Math.floor((validUserNumber % secondaryAddressLength % buildingNumberLength % streetLength) / cityNameLength);
    const stateRes = Math.floor((validUserNumber % secondaryAddressLength % buildingNumberLength % streetLength % cityNameLength) / stateLength);
    const zipCodeRes = validUserNumber % secondaryAddressLength % buildingNumberLength % streetLength % cityNameLength % stateLength;

    const func = FuncMap[userNumber % 2];
    return func(secondaryAddress[secondaryAddressRes], buildingNumber[buildingNumberRes], street[streetRes], cityName[cityNameRes], state[stateRes], zipCode[zipCodeRes]);
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