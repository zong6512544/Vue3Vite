/*
 * @Author: zongbao.yao
 * @Date: 2021-11-04 00:13:25
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-11-16 03:54:39
 * @Description: route枚举
 */

interface InterfaceEnumRoute {
  [name: string]: { path: string }
}

// 静态route
const ENUM_STATIC_ROUTE: InterfaceEnumRoute = {
  // home
  index: {
    path: '/'
  },
  home: {
    path: '/home'
  },
  // login
  login: {
    path: '/login'
  },
  // not found
  notFound: {
    path: '/notFound'
  }
}
// 动态route
const ENUM_DYNAMIC_ROUTE: InterfaceEnumRoute = {
  // ****************************************************************
  customerManage: {
    path: '/customer-manage'
  },
  groupList: {
    path: '/customer-manage/group-list'
  },
  userList: {
    path: '/customer-manage/user-list'
  },
  // ****************************************************************
  authorizeManage: {
    path: '/authorize-manage'
  },
  authorizeManageUser: {
    path: '/authorize-manage/user'
  },
  authorizeManageUserVip: {
    path: '/authorize-manage/user/vip'
  },
  authorizeManageUserStaff: {
    path: '/authorize-manage/user/staff'
  }
}

// 所有route
const ENUM_ROUTE: InterfaceEnumRoute = {
  ...ENUM_STATIC_ROUTE,
  ...ENUM_DYNAMIC_ROUTE
}

export { ENUM_STATIC_ROUTE, ENUM_DYNAMIC_ROUTE, ENUM_ROUTE, InterfaceEnumRoute }
