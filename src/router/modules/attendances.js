
import Layout from '@/layout'
export default {
  path: '/attendances',
  // name: 'attendances', // 后面会在做权限的时候用到
  component: Layout,
  children: [{
    path: '', // 这里什么都不写表示二级路由的默认路由
    component: () => import('@/views/attendances'),
    // 路由的元信息
    meta: {
      title: '考勤', // 这里用title因为左侧导航读取了这里的title属性
      icon: 'skill'
    }
  }]
}
