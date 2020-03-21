import Vue from 'vue'
import Router from 'vue-router'


// 安装组件
Vue.use(Router)

// 懒加载路由
// 分类页面路由
const Category = ()=> import( "views/category/Category")
// 主页路由
const Home = ()=> import( "views/home/Home")
// 我的页面路由
const Profile = ()=> import( "views/profile/Profile")
// 购物车路由
const ShopCart = ()=> import( "views/shopCart/ShopCart")
// 详情页路由
const Detail = ()=> import( "views/detail/Detail")

// 导出实例参数
const routes = [
  // 配置默认重定向
  {
    path: '/',
    redirect: '/home'
  },
  // 动态路由
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      title: 'Detail'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: 'Category'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    meta: {
      title: 'ShopCart'
    }
  }
]
const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, form, next) => {
  document.title = to.matched[0].meta.title
  next()
})

// 导出路由实例
export default router