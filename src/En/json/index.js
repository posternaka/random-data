import fullName from './fullName.json';
import address from './address.json';
import id from './id.json';
import phone from './phone.json';

const splitId = ({ uuid }) => {
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

const splitPhone = ({ cod, phoneNumber }) => {
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

const splitIdRes = splitId(id);
const splitPhoneRes = splitPhone(phone);


export default { fullName, address, id: splitIdRes, phone: splitPhoneRes };