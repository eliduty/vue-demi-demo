import { switchVersion, loadModule } from './utils';
(async () => {
  const Vue = await loadModule('vue');

  if (!Vue || typeof Vue.version !== 'string') console.warn('[@bpe/component] Vue is not found. Please run "npm install vue" to install.');
  else if (Vue.version.startsWith('2.7.')) switchVersion('2.7');
  else if (Vue.version.startsWith('2.')) switchVersion('2');
  else if (Vue.version.startsWith('3.')) switchVersion('3');
  else console.warn(`[@bpe/component] Vue version v${Vue.version} is not suppported.`);
})();
