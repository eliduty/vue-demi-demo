import Vue, { version } from 'vue';
import App from '../src/App.vue';
console.warn('Vue version: ', version);
Vue.config.productionTip = false;
new Vue({ render: h => h(App as any) }).$mount('#app');
