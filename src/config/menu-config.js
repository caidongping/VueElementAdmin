module.exports = [
{
  name: '示例',
  id: 'example',
  icon: 'el-icon-phone',
  sub: [{
    name: '示例',
    id: 'example1',
    icon: 'el-icon-s-tools',
    data: [{
      name: '表单验证',
      componentName: 'FromValidator',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }, {
      name: 'Table',
      componentName: 'Table',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }, {
      name: 'Checkbox 多选框2',
      componentName: 'FormCheckbox',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }
  
  ]
  }]
},
{
  name: 'Data',
  id: 'data',
  icon: 'el-icon-tickets',
  sub: [{
    name: 'Table 表格',
    id: 'table',
    icon: 'el-icon-tickets',
    data: [{
      name: '基础表格',
      componentName: 'BasicLayout',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }]
  }]
}]