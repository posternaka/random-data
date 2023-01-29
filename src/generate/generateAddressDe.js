export const generateAddress = (startSeed, userNumber, { street, buildingNumber, secondaryAddress, zipCode, cityName }) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (street.length * buildingNumber.length * secondaryAddress.length * zipCode.length * cityName.length);
    const streetLength = allLength / street.length;
    const buildingNumberLength = streetLength / buildingNumber.length;
    const secondaryAddressLength = buildingNumberLength / secondaryAddress.length;
    const zipCodeLength = secondaryAddressLength / zipCode.length;

    const validUserNumber = userIndex % allLength;
    const streetRes = Math.floor(validUserNumber / streetLength);
    const buildingNumberRes = Math.floor((validUserNumber % streetLength) / buildingNumberLength);
    const secondaryAddressRes = Math.floor((validUserNumber % streetLength % buildingNumberLength) / secondaryAddressLength);
    const zipCodeRes = Math.floor((validUserNumber % streetLength % buildingNumberLength % secondaryAddressLength) / zipCodeLength);
    const cityNameRes = validUserNumber % streetLength % buildingNumberLength % secondaryAddressLength % zipCodeLength;

    const func = FuncMap[userNumber % 2];
    return func(street[streetRes], buildingNumber[buildingNumberRes], secondaryAddress[secondaryAddressRes], zipCode[zipCodeRes], cityName[cityNameRes]);
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