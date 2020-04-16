<template>
  <div id="commonTable">
    <el-table
      ref="table"
      :data="data"
      :height="tableHeight"
      border
      stripe
      tooltip-effect="light"
      　　　　　　@selection-change="handleSelectionChange"
    >
      <slot name="table_oper" />

      <el-table-column type="selection" width="55"></el-table-column>

      <template v-for="(item, index) in columns">
        <el-table-column
          v-if="item.show != false"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :align="item.align?item.align:'center'"
          :width="item.width"
          :formatter="item.formatter?item.formatter : formatterValue"
        ></el-table-column>
      </template>

      
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="text-align: center;margin:10px 0;"
      :current-page="pager.pageNo"
      :page-size="pager.limit"
      :page-sizes="pager.sizes"
      :total="pager.total"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "commonTable",
  props: {
    columns: Array,
    data: Array,
    pager: Object
  },
  data() {
    return {
      tableHeight: 50
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
    formatterValue(row, column, cellValue) {
      return cellValue;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.tableHeight =
        window.innerHeight - this.$refs.table.$el.offsetTop - 60;

      // 监听窗口大小变化
      let self = this;
      window.onresize = function() {
        self.tableHeight =
          window.innerHeight - self.$refs.table.$el.offsetTop - 60;
      };
    });
    //this.$refs.table.$el.offsetTop：表格距离浏览器的高度 //50表示你想要调整的表格距离底部的高度（你可以自己随意调整），因为我们一般都有放分页组件的，所以需要给它留一个高度
  }
};
</script>