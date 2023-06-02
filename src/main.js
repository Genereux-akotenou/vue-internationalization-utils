import { createApp } from "vue";
import { createRouter } from "vue-router";
import {appTranslator} from "./lang/vue-translate/core";
import messages from './lang';

export const router = createRouter({
    /* CREATE ROUTER */
});

const app = createApp(App);

export const  translator = appTranslator({
    locale: sessionStorage.lang||'en',
    fallbackLocale: 'en',
    messages: messages
})

// Add the `req` object and `req.t` to the Vue prototype
app.config.globalProperties.$req = {};
translator(app.config.globalProperties.$req);

app.use(router).mount("#core");

//export { router };
