<template>
  <div style=" padding: 10px;">
    <el-row :gutter="20">
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

    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableData"
          ref="multipleTable"
          border
          height="calc(100% - 220px)"
          max-height="calc(100vh - 220px)"
          tooltip-effect="dark"
          v-loading="loading"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" fixed label="日期" width="140">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" fixed label="姓名" width="120">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="address" fixed label="地址"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-col :span="24">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        border
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-col>
  </div>
</template>
<style>
.el-row {
  margin-bottom: 10px;
}
</style>

<script>
import table from "@/config/table";

import select from "@/config/select";

export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    openFullScreen1() {
     // this.fullscreenLoading = true;
      this.loading = true;
      setTimeout(() => {
       // this.fullscreenLoading = false;
        this.loading = false;
      }, 2000);
    }
  },
  data() {
    return {
      loading: false,
      fullscreenLoading: false,
      multipleSelection: [],
      tableData: table,
      input: "",
      options: select,
      value: "",
      radio: "1",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>
