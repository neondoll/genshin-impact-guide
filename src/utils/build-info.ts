// Утилиты для получения информации о сборке
export const getBuildInfo = () => ({
  version: import.meta.env.APP_VERSION,
  mode: import.meta.env.BUILD_MODE,
  buildDate: import.meta.env.BUILD_DATE,
  isProduction: import.meta.env.BUILD_MODE === "production",
  isDevelopment: import.meta.env.BUILD_MODE === "development",
  isAnalyze: import.meta.env.BUILD_MODE === "analyze",
});

// Хук для использования в компонентах
export const useBuildInfo = () => {
  return getBuildInfo();
};
