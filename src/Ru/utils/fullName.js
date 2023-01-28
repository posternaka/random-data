
export const generateFullName = (startSeed, userNumber, { firstName, lastName, patronymic }) => {
    const userIndex = startSeed + userNumber - 1;
    const validNumber = userIndex % (firstName.length * lastName.length);
    const firstNameIndex = Math.floor(validNumber / firstName.length);
    const lastNameIndex = Math.floor((validNumber % firstName.length) / lastName.length);
    const patronymicIndex = validNumber % firstName.length % lastName.length;

    return `${firstName[firstNameIndex]} ${lastName[lastNameIndex]} ${patronymic[patronymicIndex]}`;
};
