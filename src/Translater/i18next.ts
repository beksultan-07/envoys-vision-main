import i18n, {changeLanguage} from 'i18next';
import {initReactI18next} from 'react-i18next'
import Russ from './Russ.json'
import Eng from './Eng.json'


i18n
    .use(initReactI18next)
    .init({
        resources:{
            ru: {translation: Russ},
            en: {translation: Eng},
        },
        lng: 'ru',
        fallbackLng: "en",
        interpolation: {escapeValue: false}
    })

export const changeLang = (lang) => {
    console.log(lang)
    i18n.changeLanguage(lang)
}


