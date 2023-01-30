import { getParams } from '../helpers/getParams';

export const generateAddress = (startSeed, userNumber, { state, cityName, streetSuffix, streetName, building, flat }) => {
    const userIndex = startSeed + userNumber - 1;

    const [stateStr, cityNameStr, streetSuffixStr, streetNameStr, buildingStr, flatStr] = getParams(userIndex, [state, cityName, streetSuffix, streetName, building, flat]);
    
    const func = FuncMap[userNumber % 2];
    return func(stateStr, cityNameStr, streetSuffixStr, streetNameStr, buildingStr, flatStr);
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