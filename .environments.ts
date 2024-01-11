export const ENV_DEVELOPMENT = 'development';
export const ENV_STAGING = 'staging';
export const ENV_PRODUCTION = 'production';

export const ENV = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  appMode: process.env.NEXT_PUBLIC_APP_MODE,
  isDevelopment: process.env.NEXT_PUBLIC_APP_MODE === ENV_DEVELOPMENT,
  isStaging: process.env.NEXT_PUBLIC_APP_MODE === ENV_STAGING,
  isProduction: process.env.NEXT_PUBLIC_APP_MODE === ENV_PRODUCTION,
};
