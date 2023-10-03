export default defineNuxtRouteMiddleware((to, from) => {
  const headerStore = useWNMHeaderStore();

  headerStore.setNavigation({
    links: [
      {
        path: '/product-catalog',
        title: 'Product Catalog',
        description: '',
      },
    ],
  });

  if (to.path.startsWith(`/product-catalog`)) {
    headerStore.setSubNavigation({
      links: [
        {
          path: '/product-catalog/categories',
          title: 'Categories',
          description: 'Categories',
        },
        {
          path: '/product-catalog/products',
          title: 'Products',
          description: 'Products',
        },
        {
          path: '/product-catalog/offerings',
          title: 'Offerings',
          description: 'Offerings',
        },
      ],
    });
  }
});
