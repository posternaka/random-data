import { getParams } from '../helpers/getParams';

export const generateId = (startSeed, userNumber, {first, second, third}) => {
    const userIndex = startSeed + userNumber - 1;
    
    const [firstStr, secondStr, thirdStr] = getParams(userIndex, [first, second, third]);

    return `${firstStr}${secondStr}${thirdStr}`;
}