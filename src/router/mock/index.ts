/*
 * @Author: zongbao.yao
 * @Date: 2021-11-06 17:47:03
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-11-16 03:56:26
 * @Description: 模拟后端返回的菜单
 */

interface MenuInfoInterface {
  alias: string
  name: string
  icon?: string
  subMenuList?: Array<MenuInfoInterface>
}

const menuList: Array<MenuInfoInterface> = [
  {
    alias: 'home',
    icon: 'iconshouye1',
    name: '首页'
  },
  //
  {
    alias: 'customerManage',
    icon: 'iconyinliuhuoke',
    name: '客户管理',
    subMenuList: [
      {
        alias: 'groupList',
        icon: '',
        name: '群列表'
      },
      {
        alias: 'userList',
        icon: '',
        name: '用户列表'
      },
      {
        alias: 'userNotFoundTest',
        name: '我是可能丢失的页面',
        subMenuList: [
          {
            alias: 'userNotFoundTest',
            name: '我是可能丢失的页面'
          }
        ]
      }
    ]
  },
  {
    alias: 'authorizeManage',
    name: '权限管理',
    subMenuList: [
      {
        alias: 'authorizeManageUser',
        name: '人员管理',
        subMenuList: [
          {
            alias: 'authorizeManageUserVip',
            name: '会员管理'
          },
          {
            alias: 'authorizeManageUserStaff',
            name: '员工管理'
          },
          {
            alias: 'notFoundTest',
            name: '我是可能丢失的页面'
          }
        ]
      }
    ]
  },
  {
    alias: 'notFoundTest',
    name: '我是可能丢失的页面',
    subMenuList: [
      {
        alias: 'notFoundTest',
        name: '我是可能丢失的页面'
      }
    ]
  }
]

export { menuList, MenuInfoInterface }
