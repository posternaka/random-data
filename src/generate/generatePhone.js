import { getParams } from '../helpers/getParams';

export const generatePhoneDe = (startSeed, userNumber, {first, second, third, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    
    const [firstStr, secondStr, thirdStr, codStr] = getParams(userIndex, [first, second, third, cod]);

    return `+ (49 ${codStr}) ${firstStr}${secondStr}${thirdStr}`;
}

export const generatePhoneEn = (startSeed, userNumber, {first, second, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    
    const [firstStr, secondStr, codStr] = getParams(userIndex, [first, second, cod]);

    return `+1 (${codStr}) ${firstStr}${secondStr}`;
}

export const generatePhoneRu = (startSeed, userNumber, {first, second, third, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    
    const [firstStr, secondStr, thirdStr, codStr] = getParams(userIndex, [first, second, third, cod]);

    return `+7 (${codStr}) ${firstStr}${secondStr}${thirdStr}`;
}