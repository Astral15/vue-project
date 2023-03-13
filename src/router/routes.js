
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
          path: 'login',
          name: 'Login',
          component: () => import('../views/register/Login.vue'),
        },
      ]
    },
    {
      path: '/mainUser/:userId',
      name: 'MainUser',
      component: () => import('../views/allUsers/MainUser.vue'),
      children: [
        {
          path: 'allUsers',
          name: 'AllUsers',
          component: () => import('../views/allUsers/AllUser.vue'),
        },
        {
          path: 'user',
          name: 'User',
          component: () => import('../views/allUsers/User.vue'),
        },
      ]
    },
    {
      path: '/categories/:userId',
      name: 'Categories',
      component: () => import('../views/categories/Categories.vue')
    }
  ]

  export default routes