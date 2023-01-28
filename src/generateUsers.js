import { MAP_LOCALE } from './localizeUtils';

import { getErrorCount, ERROR_MAP } from './errorUtils';

const ERROR_USER_KEY = ['fullName', 'address', 'phone'];

const addError = (user, errorCount, locale) => {
    const copyUser = {...user};
    let errorKey = user.index % Object.keys(ERROR_MAP).length;
    let strIndex = user.index % ERROR_USER_KEY.length;

    Array.from(Array(errorCount + 1).keys())
    .slice(1)
    .forEach(errorIndex => {
        const func = ERROR_MAP[errorKey];
        const str = copyUser[ERROR_USER_KEY[strIndex]];
        copyUser[ERROR_USER_KEY[strIndex]] = func(str, user.index, errorIndex, locale);
        
        // if (errorCount > 0) {
        //     console.log(user.index, errorKey);
        //     console.log(str);
        //     console.log(copyUser[ERROR_USER_KEY[strIndex]]);
        // }
        const bias = (errorIndex % ERROR_USER_KEY.length) === 0 ? 1 : 0;
        errorKey = (errorKey + 1 + bias) % Object.keys(ERROR_MAP).length;
        strIndex = (strIndex + 1) % ERROR_USER_KEY.length;
    })
    
    return copyUser;
}

export const generateUsers = (seed, locale, errorProbability, page = 1, limit = 10) => {
    const language = MAP_LOCALE[locale];

    if (seed < 1 || errorProbability < 0 || !language) {
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
        .map(it => {
            const errorCount = getErrorCount(it.index, errorProbability);
            return addError(it, errorCount, locale)
        })
}