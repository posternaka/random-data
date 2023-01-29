import fullName from './fullName.json';
import address from './address.json';
import id from './id.json';
import phone from './phone.json';

import { splitId, splitPhoneGeneral } from '../../../helpers/splitData';

const splitIdRes = splitId(id);
const splitPhoneRes = splitPhoneGeneral(phone);


export default { fullName, address, id: splitIdRes, phone: splitPhoneRes };