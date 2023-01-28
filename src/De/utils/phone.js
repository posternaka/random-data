export const generatePhone = (startSeed, userNumber, {first, second, third, cod}) => {
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