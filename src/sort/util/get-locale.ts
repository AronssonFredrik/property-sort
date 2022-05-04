import { LanguageCode } from "language-code";
import { LocaleType } from "../sort.interface";

const setLocaleFallback = (unknownLocale: LocaleType): LanguageCode => {
    console.error(`${unknownLocale} is an unknown locale, please follow ISO 639-1 standard. Fallback set to English.`);

    return LanguageCode.en;
};

export const getLocale = (locale: LocaleType = "en"): LanguageCode => {
    const response = LanguageCode[locale as LanguageCode] ?? setLocaleFallback(locale);

    return response;
};
