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
    alias: 'index',
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
        name: '会员列表'
      },
      {
        alias: 'userList',
        icon: '',
        name: '师资列表'
      }
    ]
  }
]

export { menuList, MenuInfoInterface }
