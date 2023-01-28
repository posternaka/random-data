
export const generateFullName = (startSeed, userNumber, { firstName, lastName }) => {
    const userIndex = startSeed + userNumber - 1;
    const validNumber = userIndex % (firstName.length * lastName.length);
    const firstNameIndex = Math.floor(validNumber / lastName.length);
    const lastNameIndex = validNumber % lastName.length;

    return `${firstName[firstNameIndex]} ${lastName[lastNameIndex]}`;
};
