<template>
  <div>
    <div style="margin-left: 10px;">
      <el-button @click="handleAdd()" v-has="'line_add'">新增</el-button>
    </div>

    <!-- table表格 -->
    <common-table
      :tableData="tableData"
      :tabCloum="tabCloum"
      :tableSelect="tableSelect"
      :tableRadio="tableRadio"
      :tableOrder="tableOrder"
      :pageNum="pageNum"
      :pageSize="pageSize"
      :tableOperateList="tableOperateList"
      :total="total"
      ref="table"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      @radioChange="radioChange"
    ></common-table>
  </div>
</template>

<script>
import commonTable from "@/components/common/commonTable";

import table from "@/config/table";

export default {
  components: { commonTable },
  data() {
    return {
      tableRadioSelection: {},
      pageNum: 1,
      pageSize: 10,
      total: 20,
      tableOperateList: [
        {
          name: "编辑",
          icon: "el-icon-edit",
          type: "primary",
          vhas: "line_edit",
          method: (index, row) => {
            this.handleEdit(index, row);
          }
        },
        {
          name: "详情",
          icon: "el-icon-chat-line-square",
          type: "success",
          vhas: "line_details",
          method: (index, row) => {
            this.handleDetails(index, row);
          }
        },
        {
          name: "删除",
          icon: "el-icon-delete",
          type: "danger",
          vhas: "line_del",
          method: (index, row) => {
            this.handleDel(index, row);
          }
        }
      ], //传table里面有那些操作
      tableData: table,
      tableSelect: true, //是否有多选操作列
      tableRadio: true, //是否有单选操作列
      tableOrder: true, //是否有序号
      tabCloum: [
        { label: "设备编号", prop: "s1", width: "100px" },
        { label: "设备名称", prop: "s2", width: "100px" },
        {
          label: "区域名称",
          prop: "s3",
          width: "250px",
          tooltips: [
            {
              name: "姓名",
              content: "s2"
            },
            {
              name: "住址",
              content: "s3"
            }
          ]
        }, //ellipsis预留移入显示
        {
          label: "街道名称",
          prop: "s4",
          width: "250px",
          render: row => {
            if (row.s4 == "1") {
              return "<div style='color: red;'>街道1</div>";
            } else {
              return "<div style='color: yellowgreen;'>街道2</div>";
            }
          }
        },
        { label: "站点名称", prop: "s5" },
        { label: "挂载设备数量", width: "200px", prop: "s6" },
        { label: "挂载设备数量", width: "250px", prop: "s6" },
        { label: "挂载设备数量", width: "250px", prop: "s6" },
        { slot: "button", name: "操作" }
      ] // 操作列
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleEdit(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
    handleDetails(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
    handleDel(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
    handleAdd() {
      //复选框
      console.log(this.$refs.table.$refs.tableref.selection);
      console.log(this.$refs.table.$refs.tableref.selection[0].sid);
      //单选框
      console.log(this.tableRadioSelection);
      console.log(this.tableRadioSelection.sid);
    },

    handleSizeChange(vul) {
      console.log(" handleSizeChange:", vul);
    },
    handleCurrentChange(vul) {
      console.log(" handleCurrentChange:", vul);
    },
    handleSelectionChange(vul) {
      console.log(" handleSelectionChange:", vul);
    },
    radioChange(row) {
      this.tableRadioSelection = row;
    }
  }
};
</script>
