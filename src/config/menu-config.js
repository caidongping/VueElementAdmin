module.exports = [
  {
    name: '示例',
    id: 'example',
    icon: 'el-icon-phone',
    level: false,
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
      meta:
      {
        isLogin: false,
        permission: [{
          name: "新增",
          vhas: "line_add",
        }, 
        {
          name: "编辑",
          vhas: "line_edit",
        },
        {
          name: "详情",
          vhas: "line_details",
        },
        {
          name: "删除",
          vhas: "line_del",
        }]
      },
    }, {
      name: 'Checkbox 多选框2',
      componentName: 'FormCheckbox',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }
      , {
      name: '日期',
      componentName: 'DatePicker',
      icon: 'el-icon-s-tools',
      meta: {
        isLogin: false,
      }
    }
    ]
  },
  {
    name: 'Data',
    id: 'data',
    icon: 'el-icon-tickets',
    level: true,
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