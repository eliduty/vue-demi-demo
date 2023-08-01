import config from '@eliduty/prettier-config';
export default {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss']
};
