
const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/Videos',
      name: 'Videos',
      component: () => import('../views/video.vue'),
    },
  ]

  export default routes