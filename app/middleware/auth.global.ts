export default defineNuxtRouteMiddleware(async (to,) => {
  if (to.path === '/auth/login') return;

  const token = useCookie('jwt-token')?.value;
  if (!token) return navigateTo('/auth/login');

  const { valid } = await $fetch('/api/auth/verify', {
    method: 'POST',
    body: { token }
  });
  if (!valid) return navigateTo('/auth/login');
});
