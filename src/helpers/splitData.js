export const splitId = ({ uuid }) => {
    const result = {
        first: [],
        second: [],
        third: []
    }

    uuid.forEach(it => {
        result.first.push(it.slice(0, 8));
        result.second.push(it.slice(8, 24));
        result.third.push(it.slice(24));
    });

    return result;
}

export const splitPhoneGeneral = ({ cod, phoneNumber }) => {
    const result = {
        first: [],
        second: [],
        third: [],
        cod
    }

    phoneNumber.forEach(it => {
        const array = it.split('-');
        result.first.push(array[0]);
        result.second.push(`-${array[1]}-`);
        result.third.push(array[2]);
    });

    return result;
}

export const splitPhoneSpecial = ({ cod, phoneNumber }) => {
    const result = {
        first: [],
        second: [],
        cod
    }

    phoneNumber.forEach(it => {
        const array = it.split('-');
        result.first.push(array[0]);
        result.second.push(`-${array[1]}`);
    });

    return result;
}