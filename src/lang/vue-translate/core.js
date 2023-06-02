
const appTranslator = function (obj) {
    let locale = obj.locale;
    let fallbackLocale = obj.fallbackLocale;
    let messages = obj.messages;

    return function (req) {
        sessionStorage.setItem('lang', messages[locale] ? locale : fallbackLocale);

        req.t = function (key, variables) {
            if (messages[sessionStorage.lang] && messages[sessionStorage.lang][key]) {
                let translation = messages[sessionStorage.lang][key];

                if (variables) {
                    Object.keys(variables).forEach((variable) => {
                        translation = translation.replace(`{${variable}}`, variables[variable]);
                    });
                }

                return translation;
            }
            if (messages[fallbackLocale] && messages[fallbackLocale][key]) {
                return messages[fallbackLocale][key];
            }

            return key;
        };
    };
}

export { appTranslator }