import * as vt from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options = {
  timeout: 5000,
  position: vt.POSITION.TOP_RIGHT,
  maxToasts: 5,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  newestOnTop: true,
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default, options);
});
