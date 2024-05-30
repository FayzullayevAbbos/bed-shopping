import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "../languages/ru.json"
import uzTranslation from "../languages/uz.json"
import enTranslation from "../languages/en.json"

const resources = {
    ru: {
        translation:ruTranslation,
    },
    uz: {
        translation:uzTranslation,
    },
    en: {
        translation: enTranslation,
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng:"en",
    fallbackLng:"en",
    interpolation:{
        escapeValue:false
    }
})

export default i18next
