export const generatePhone = (startSeed, userNumber, {first, second, cod}) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (cod.length * first.length * second.length);
    const codLength = allLength / cod.length; 
    const firstLength = codLength / first.length;

    const validUserNumber = userIndex % allLength;
    const codRes = Math.floor(validUserNumber / codLength);
    const firstRes = Math.floor((validUserNumber % codLength) / firstLength);
    const secondRes = validUserNumber % codLength % firstLength;

    return `+1 ${cod[codRes]} ${first[firstRes]}${second[secondRes]}`;
}