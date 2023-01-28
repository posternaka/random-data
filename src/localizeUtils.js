import dataRu from './Ru/json/index';
import dataEn from './En/json/index';
import dataDe from './De/json/index';
import generateRu from './Ru/utils/index';
import generateEn from './En/utils/index';
import generateDe from './De/utils/index';

export const LOCALE = {
    RU: 'ru',
    EN: 'en',
    DE: 'de',
};

export const MAP_LOCALE = {
    [LOCALE.RU]: { data: dataRu, generate: generateRu },
    [LOCALE.EN]: { data: dataEn, generate: generateEn },
    [LOCALE.DE]: { data: dataDe, generate: generateDe },
};