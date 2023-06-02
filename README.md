# Vue Internationalization Utils

Vue Internationalization Utils is a lightweight utility for introducing language internationalization in Vue.js apps. It provides an alternative to vI18n, which can sometimes be difficult to install.

* Sometimes we do not need a lot a dependencies in our project and when it comes easy to develop by ourselves it always better.
* Let go 😎😎😎

## Setup

To install Vue Internationalization Utils, you can follow these steps:

1. Clone the repository:
2. Copy the `lang` folder into you vuejs src folder
3. Import the necessary modules in your `main.js` file:
```javascript
import { appTranslator } from "./lang/vue-translate/core";
import messages from "./lang";

const app = createApp(App);
// ...
```

4. Initialize the translator with the desired configuration:
```javascript
export const translator = appTranslator({
    locale: sessionStorage.lang || "en",
    fallbackLocale: "en",
    messages: messages
});

```
5. Add the req object and req.t to the Vue prototype:
```javascript
app.config.globalProperties.$req = {};
translator(app.config.globalProperties.$req);
```

6. Use the router and mount the app:
```javascript
app.use(router).mount("#core");
```

## Usage
In your Vue components, you can use the $req.t function to translate text. For example:
```html
<template>
    <div>
        App body: {{ $req.t("hello") }}
        <!-- Other components and code -->
    </div>
</template>

```

## Lang Select component
Customize the LangSelect component to provide language selection functionality. You can use the provided sample code as a starting point. Make sure to update the links to your routes and adjust the language options according to your needs.

## Languages
You can find the translation files in the lang folder. It contains separate JSON files for each language, such as en.json and fr.json. Modify these files to add or update translations for different languages.

## License
This project is licensed under the MIT License. Feel free to customize and expand upon this template according to your needs.
