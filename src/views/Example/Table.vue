<template>
  <div>
    <el-row>

      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>

      <el-col :span="6">
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-radio v-model="radio" label="1" style="margin-top:15px">备选项1</el-radio>
        <el-radio v-model="radio" label="2" style="margin-top:15px">备选项2</el-radio>
      </el-col>

      <el-col :span="4">
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="openFullScreen1"
          v-loading.fullscreen.lock="fullscreenLoading"
        >搜索</el-button>
        <el-button type="primary" icon="el-icon-edit">新增</el-button>
      </el-col>

    </el-row>
    
    <commonTable
      :columns="columns"
      :data="tableData"
      :pager="page"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <!-- <el-table-column slot="table_oper" align="center" label="操作" width="150" :resizable="false">
          <template slot-scope="scope">
              <el-button class="edit-bgc" icon="el-icon-edit" @click="editTableData(scope.row)">修改</el-button>
          </template>
      </el-table-column>-->
    </commonTable>
  </div>
</template>

<script>
import commonTable from "@/components/common/commonTable";

export default {
  components: { commonTable },
  data() {
    return {
      columns: [
        { prop: "date", label: "日期", width: "150", align: "center" },
        {
          prop: "name",
          label: "姓名",
          width: "200",
          align: "center",
          formatter: this.formatter
        },
        { prop: "address", label: "地址", align: "center" }
      ],
      tableData: [],
      page: {
        pageNo: 1,
        limit: 10,
        sizes: [10, 50, 100],
        total: 0
      }
    };
  },
  mounted() {
    this.tableData = [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }
    ];
    this.page.total = this.tableData.length;
  },
  methods: {
    // 重新渲染name列
    formatter(row, column, cellValue) {
      return "hello " + row.name;
    },
    // 改变页面大小处理
    handleSizeChange(val) {},
    // 翻页处理
    handleCurrentChange(val) {},
    editTableData(row) {}
  }
};
</script>