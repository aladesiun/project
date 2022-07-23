import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'flowbite';
import 'tw-elements';
// import { VueReCaptcha } from 'vue-recaptcha-v3'
const app = createApp(App);

app
    .use(router)
    // .use(VueReCaptcha, { 
    //     siteKey: '<6LcObh4gAAAAAOSjEI6LZ54UB2CiLeoTvm7r0pwR>', 
    //     loaderOptions: {
    //         useRecaptchaNet: true
    //     }
    // })
    .mount('#app');