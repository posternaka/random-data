export const generateId = (startSeed, userNumber, {first, second, third}) => {
    const userIndex = startSeed + userNumber - 1;
    const allLength = (first.length * second.length * third.length);
    const firstLength = allLength / first.length;
    const secondLength = firstLength / second.length;

    const validUserNumber = userIndex % allLength;
    const firstRes = Math.floor(validUserNumber / firstLength);
    const secondRes = Math.floor((validUserNumber % firstLength) / secondLength);
    const thirdRes = validUserNumber % firstLength % secondLength;

    return `${first[firstRes]}${second[secondRes]}${third[thirdRes]}`;
}