import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/Home', component: Home }
  ]
})

// 挂载路由导航守卫(拦截未登录直接通过url访问路由资源的请求)
router.beforeEach((to, from, next) => {
  // to   代表将要访问的路径
  // from 代表从哪个路径跳转来
  // next 是一个函数,表示放行

  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
