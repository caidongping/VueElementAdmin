<template>
<div>
     
    <!-- table表格 -->
    <common-table
      :tableData="tableData"
      :tabCloum="tabCloum"
      :tableSelect="tableSelect"
      :tableRadio="tableRadio"
      :pageNum="pageNum"
      :pageSize="pageSize"
      :tableOperateList="tableOperateList"
      :total="total"
    ></common-table>


  </div>
</template>

<script>
import commonTable from "@/components/common/commonTable";

import table from "@/config/table";

import tableOperate from "@/config/tableOperate";

export default {
  components: { commonTable },
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      total: 20,
      tableOperateList: tableOperate, //传table里面有那些操作
      tableData: table,
      tableSelect: true, //是否有多选操作列
      tableRadio: true, //是否有单选操作列
      tabCloum: [
        { label: "设备编号", prop: "s1", width: "100px", fixed: true },
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
        // { label: "挂载设备数量", width: "250px", prop: "s6" },
        // { label: "挂载设备数量", width: "250px", prop: "s6" },
        // { label: "挂载设备数量", width: "250px", prop: "s6" },
        { slot: "button", name: "操作" }
      ] // 操作列
    };
  },
  created() {
    console.log(this.$router);
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>
