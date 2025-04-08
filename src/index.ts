// Default export for platform-admin login
export { default } from './pages/platform-admin/login';

// Export components
export { default as OtpVerificationScreen } from './components/signup/OtpVerificationScreen';
export { default as PlatformAdminLogin } from './pages/platform-admin/login';

// Export services
export * from './services/adminApiService';
export * from './services/authService';
export * from './services/twoFactorService';

// Export utility functions
export * from './utils/api';

// Export types and interfaces if any
// export type { SomeType } from './types';

// Export hooks if any
// export { useCustomHook } from './hooks/useCustomHook';
