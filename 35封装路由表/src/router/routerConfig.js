import Home from '../pages/Home'
import Index from '../pages/Index'
import Contact from '../pages/Contact'
import About from '../pages/About'

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/contact',
        component: Contact
      }, {
        path: '/home/about',
        component: About
      }
    ]
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/home',
    redirect: '/home/contact'
  }
]

export default routes