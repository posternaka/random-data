export const generatePhoneDe = (startSeed, userNumber, {first, second, third, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (cod.length * first.length * second.length * third.length);
    const codLength = allLength / cod.length; 
    const firstLength = codLength / first.length;
    const secondLength = firstLength / second.length;

    const validUserNumber = userIndex % allLength;
    const codRes = Math.floor(validUserNumber / codLength);
    const firstRes = Math.floor((validUserNumber % codLength) / firstLength);
    const secondRes = Math.floor((validUserNumber % codLength % firstLength) / secondLength);
    const thirdRes = validUserNumber % codLength % firstLength % secondLength;

    return `+ (49 ${cod[codRes]}) ${first[firstRes]}${second[secondRes]}${third[thirdRes]}`;
}

export const generatePhoneEn = (startSeed, userNumber, {first, second, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (cod.length * first.length * second.length);
    const codLength = allLength / cod.length; 
    const firstLength = codLength / first.length;

    const validUserNumber = userIndex % allLength;
    const codRes = Math.floor(validUserNumber / codLength);
    const firstRes = Math.floor((validUserNumber % codLength) / firstLength);
    const secondRes = validUserNumber % codLength % firstLength;

    return `+1 (${cod[codRes]}) ${first[firstRes]}${second[secondRes]}`;
}

export const generatePhoneRu = (startSeed, userNumber, {first, second, third, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (cod.length * first.length * second.length * third.length);
    const codLength = allLength / cod.length; 
    const firstLength = codLength / first.length;
    const secondLength = firstLength / second.length;

    const validUserNumber = userIndex % allLength;
    const codRes = Math.floor(validUserNumber / codLength);
    const firstRes = Math.floor((validUserNumber % codLength) / firstLength);
    const secondRes = Math.floor((validUserNumber % codLength % firstLength) / secondLength);
    const thirdRes = validUserNumber % codLength % firstLength % secondLength;

    return `+7 (${cod[codRes]}) ${first[firstRes]}${second[secondRes]}${third[thirdRes]}`;
}