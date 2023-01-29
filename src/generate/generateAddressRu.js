export const generateAddress = (startSeed, userNumber, { state, cityName, streetSuffix, streetName, building, flat }) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (building.length * streetName.length * streetSuffix.length * state.length * cityName.length * flat.length);
    const stateLength = allLength / state.length;
    const cityNameLength = stateLength / cityName.length;
    const streetSuffixLength = cityNameLength / streetSuffix.length;
    const streetNameLength = streetSuffixLength / streetName.length;
    const buildingLength = streetNameLength / building.length;

    const validUserNumber = userIndex % allLength;
    const stateRes = Math.floor(validUserNumber / stateLength);
    const cityNameRes = Math.floor((validUserNumber % stateLength) / cityNameLength);
    const streetSuffixRes = Math.floor((validUserNumber % stateLength % cityNameLength) / streetSuffixLength);
    const streetNameRes = Math.floor((validUserNumber % stateLength % cityNameLength % streetSuffixLength) / streetNameLength);
    const buildingRes = Math.floor((validUserNumber % stateLength % cityNameLength % streetSuffixLength % streetNameLength) / buildingLength);
    const flatRes = validUserNumber % stateLength % cityNameLength % streetSuffixLength % streetNameLength % buildingLength;

    const func = FuncMap[userNumber % 2];
    return func(state[stateRes], cityName[cityNameRes], streetSuffix[streetSuffixRes], streetName[streetNameRes], building[buildingRes], flat[flatRes]);
};

const evenUser = (state, cityName, streetSuffix, streetName, building, flat) => {
    return `${state}, ${cityName}, ${streetSuffix} ${streetName}, ${building}-${flat}`
}

const oddUser = (state, cityName, streetSuffix, streetName, building) => {
    return `${state}, ${cityName}, ${streetSuffix} ${streetName}, ${building}`
}

const FuncMap = 
    {
        0: evenUser,
        1: oddUser
    }