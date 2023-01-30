import { getParams } from '../helpers/getParams';

export const generateFullNameGeneral = (startSeed, userNumber, { firstName, lastName }) => {
    const userIndex = startSeed + userNumber;
    const [firstNameStr, lastNameStr] = getParams(userIndex, [firstName, lastName]);

    return `${firstNameStr} ${lastNameStr}`;
};

export const generateFullNameSpecial = (startSeed, userNumber, { firstName, lastName, patronymic }) => {
    const userIndex = startSeed + userNumber - 1;
    const [firstNameStr, lastNameStr, patronymicStr] = getParams(userIndex, [firstName, lastName, patronymic]);

    return `${firstNameStr} ${lastNameStr} ${patronymicStr}`;
};