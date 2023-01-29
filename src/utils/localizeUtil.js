import dataRu from '../location/Ru/json/index';
import dataEn from '../location/En/json/index';
import dataDe from '../location/De/json/index';
import generateRu from '../location/Ru/index';
import generateEn from '../location/En/index';
import generateDe from '../location/De/index';

export const LOCALE = {
    RU: 'ru',
    EN: 'en', 
    DE: 'de',
};

export const MAP_LOCALE = {
    [LOCALE.RU]: { 
        data: dataRu, 
        generate: generateRu, 
        alphabet: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    },
    [LOCALE.EN]: { 
        data: dataEn, 
        generate: generateEn, 
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
    },
    [LOCALE.DE]: { 
        data: dataDe, 
        generate: generateDe, 
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜßabcdefghijklmnopqrstuvwxyzäöüß' 
    },
};