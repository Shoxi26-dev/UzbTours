import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const i18n = createI18n({
  locale: 'en', // set default locale
  messages: {
    en: { message: 'Hello World' },
    fr: { message: 'Bonjour le monde' }
  }
});

const app = createApp(App);
app.use(i18n);
app.component('swiper', Swiper);
app.component('swiper-slide', SwiperSlide);
app.mount('#app');