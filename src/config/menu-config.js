module.exports = [{
  name: '基础',
  id: 'Basic',
  icon: 'el-icon-s-tools',
  sub: [{
    name: 'Layout 布局1',
    id: 'Basic1',
    icon: 'el-icon-s-tools',
    data: [{
      name: 'Layout 布局2',
      componentName: 'BasicLayout',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }]
  }, {
    name: 'Container 布局容器1',
    id: 'BasicContainer1',
    icon: 'el-icon-s-tools',
    data: [{
      name: 'Container 布局容器2',
      componentName: 'BasicContainer',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }]
  },
  ]
},
{
  name: 'From',
  id: 'from',
  icon: 'el-icon-phone',
  sub: [{
    name: '表单',
    id: 'from1',
    icon: 'el-icon-s-tools',
    data: [{
      name: '表单验证',
      componentName: 'Form',
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
    }]
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
      componentName: 'Table',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }]
  }]
}]