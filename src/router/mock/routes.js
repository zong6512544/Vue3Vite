/*
 * @Author: zongbao.yao
 * @Date: 2021-11-06 17:47:03
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2021-11-16 03:56:26
 * @Description: 模拟后端返回的菜单
 */
              

const menus = [
    {
        alias: 'index',
        icon: 'iconshouye1',
        name: '首页'
    },
    // 
    {
        alias: 'userManage',
        icon: 'iconyinliuhuoke',
        name: '人员管理',
        subMenuList: [
            {
                alias: 'vipList',
                icon: '',
                name: '会员列表',
            },
            {
                alias: 'teacherList',
                icon: '',
                name: '师资列表',
            },
            {
                alias: 'staffList',
                icon: '',
                name: '员工列表',
                isMaster: true
            }
        ]
    },
    
    {
        alias: 'lessonsManage',
        icon: 'iconshouquanbushu',
        name: '课程管理',
        subMenuList: [
            {
                alias: 'lessonsList',
                icon: '',
                name: '课程列表',
            },
            {
                alias: 'mealList',
                icon: '',
                name: '套餐列表',
            },
            {
                alias: 'lessonsRecord',
                icon: '',
                name: '约课记录',
            }
        ]
    },
]

export default menus