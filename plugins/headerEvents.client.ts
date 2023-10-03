export default defineNuxtPlugin((nuxtApp) => {
  const headerStore = useWNMHeaderStore();

  document.addEventListener(EWnmEvents.LOGIN, () => {
    console.log('login');
    headerStore.setUser({
      isAuthenticated: true,
      name: 'Wrigley',
      role: 'Editor',
    });
  });

  document.addEventListener(EWnmEvents.LOGOUT, () => {
    headerStore.clearUser();
  });
});
