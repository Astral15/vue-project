
const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/videos/:id',
      name: 'Videos',
      component: () => import('../views/Video.vue'),
    },
    {
      path: '/mainRegister/:userId',
      name: 'MainRegister',
      component: () => import('../views/register/MainRegister.vue'),
      children: [
        {
          path: 'register',
          name: 'Register',
          component: () => import('../views/register/Register.vue'),
        },
        {
          path: 'update',
          name: 'Update',
          component: () => import('../views/register/Update.vue'),
        },
      ]
    },
  ]

  export default routes