import { MAP_LOCALE } from './localizeUtils';

export const getErrorCount = (userNumber, errorProbability) => {
    const integer = Math.trunc(errorProbability);
    const float = errorProbability - integer;
    
    const floatError = (userNumber - 1) * float;
    const integerResidual = Math.trunc(floatError);
    const floatResidual = floatError - integerResidual;
    
    return integer + Math.floor(floatResidual + float);
}

const getIndexStr = (str, userNumber, errorIndex) => {
    return ((userNumber % str.length) * errorIndex) % str.length;
}

const replaceError = (str, userNumber, errorIndex) => {
    let copyStr = str.split('');
    const strReplaceIndex = getIndexStr(str, userNumber, errorIndex);
    let replaceFirstIndex = strReplaceIndex - 1;
    let replaceSecondIndex = strReplaceIndex;

    if (strReplaceIndex === 0) {
        replaceFirstIndex = 0;
        replaceSecondIndex = 1;
    }

    const [ spliceWord ] = copyStr.splice(replaceFirstIndex, 1, copyStr[replaceSecondIndex]);
    copyStr.splice(replaceSecondIndex, 1, spliceWord);

    return copyStr.join('');
}

const cutError = (str, userNumber, errorIndex) => {
    let copyStr = str.split('');
    const strCutIndex = getIndexStr(str, userNumber, errorIndex);
    copyStr.splice(strCutIndex, 1);

    return copyStr.join('');
}

const addSymbolError = (str, userNumber, errorIndex, locale) => {
    let copyStr = str.split('');
    const strCutIndex = getIndexStr(str, userNumber, errorIndex);
    copyStr.splice(strCutIndex, 0, getSymbol(userNumber, errorIndex, locale));

    return copyStr.join(''); 
}

const getSymbol = (userNumber, errorIndex, locale) => {
    const strIndex = getIndexStr(MAP_LOCALE[locale].alphabet, userNumber, errorIndex);
    return MAP_LOCALE[locale].alphabet[strIndex];
}

export const ERROR_MAP = {
    0: replaceError,
    1: cutError,
    2: addSymbolError
}