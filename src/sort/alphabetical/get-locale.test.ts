import LanguageCode from "language-code";
import { getLocale } from "./get-locale";

let response: LanguageCode;

describe("getLocale", () => {
    describe("When locale is typeof LanguageCode", () => {
        beforeEach(() => {
            response = getLocale(LanguageCode.gl);
        });
        it("should return ", () => expect(response).toBe("gl"));
    });

    describe("When locale is a string", () => {
        beforeEach(() => {
            response = getLocale("sv");
        });
        it("should return ", () => expect(response).toBe("sv"));

    });

    describe("When locale is undefined", () => {
        beforeEach(() => {
            response = getLocale(undefined);
        });
        it("should return fallback value 'en'", () =>expect(response).toBe("en"));
    });
});
