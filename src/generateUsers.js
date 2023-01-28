import { MAP_LOCALE } from './localizeUtils';

const getErrorCount = (userNumber, errorProbability) => {
    const integer = Math.trunc(errorProbability);
    const float = errorProbability - integer;
    
    const floatError = (userNumber - 1) * float;
    const integerResidual = Math.trunc(floatError);
    const floatResidual = floatError - integerResidual;

    return integer + Math.floor(floatResidual);
}

export const generateUsers = (seed, locale, errorCount, page = 1, limit = 10) => {
    const language = MAP_LOCALE[locale];

    if (seed < 1 || errorCount < 0 || !language) {
        return [];
    };

    return Array.from(Array(limit + 1).keys())
    .slice(1)
    .map(it => it + ((page - 1) * limit))
    .map(it => ({
        index: it,
        id: language.generate.generateId(seed, it, language.data.id),
        fullName: language.generate.generateFullName(seed, it, language.data.fullName),
        address: language.generate.generateAddress(seed, it, language.data.address),
        phone: language.generate.generatePhone(seed, it, language.data.phone)
    }))
}

console.log(generateUsers());