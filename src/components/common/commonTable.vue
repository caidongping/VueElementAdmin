<template>
  <div style="padding: 10px">
    <!-- table -->
    <el-table
      :data="tableData"
      border
      ref="table"
      :height="tableHeight"
      @selection-change="handleSelectionChange"
      style="width: 100% ;"
    >
      <el-table-column type="selection" align="center" width="50" v-if="tableSelect"></el-table-column>

      <el-table-column align="center" width="60" v-if="tableRadio">
        <template slot-scope="scope">
          <el-radio
            v-model="radioStationVal"
            :label="scope.$index"
            @change="radioChange(scope.$index)"
          >{{null}}</el-radio>
        </template>
      </el-table-column>

      <el-table-column label="序号" align="center" width="50">
        <template slot-scope="scope">
          <span v-text="(pageNum-1)*pageSize+(scope.$index+1)"></span>
        </template>
      </el-table-column>

      <template v-for="(item, index) in tabCloum">
        <!-- 操作列 -->
        <slot v-if="item.slot" :name="item.slot"></slot>

        <!-- 普通列 -->
        <el-table-column
          v-else
          :key="index"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          align="center"
        >
          <template slot-scope="scope">
            <div v-if="scope.row[item.prop]==null||scope.row[item.prop]==''">
              <span>-</span>
            </div>
            <div v-else>
              <div v-if="item.tooltips">
                <el-popover trigger="hover" placement="top">
                  <p
                    v-for="tooltip in item.tooltips"
                  >{{tooltip.name}} : {{scope.row[tooltip.content]}}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{scope.row[item.prop]}}</el-tag>
                  </div>
                </el-popover>
              </div>

              <div v-else>
                <span v-if="item.render" v-html="item.render(scope.row)"></span>
                <span v-else v-text="scope.row[item.prop]"></span>
              </div>
            </div>
          </template>
        </el-table-column>
      </template>

      <el-table-column
        label="操作"
        v-if="tableOperateList.length!=0"
        align="center"
        fixed="right"
        width="270"
      >
        <template slot-scope="scope">
          <!-- 操作按钮 -->
          <el-button
            v-for="(tableOperate,index) in tableOperateList"
            :key="index"
            :icon="tableOperate.icon"
            :type="tableOperate.type"
            size="mini"
            v-has="tableOperate.vhas"
            @click="tableOperate.method(index,scope.row)"
          >{{tableOperate.name}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div v-show="total!=0">
      <el-pagination
        style="padding:10px 0px 0px 10px;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="newPageNum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableSelect: {
      type: Boolean,
      default: false
    }, //多选
    tableRadio: {
      type: Boolean,
      default: false
    }, //单选
    tableData: {
      type: Array
    },
    tabCloum: {
      type: Array
    },
    pageNum: {
      type: Number
    },
    pageSize: {
      type: Number
    },
    total: {
      type: Number
    },
    tableOperateList: {
      type: Array
    }
  },
  data() {
    return {
      newPageNum: 1,
      radioStationVal: "",
      tableHeight: 50
    };
  },
  created() {},
  mounted() {},
  watch: {
    pageNum(val) {
      this.newPageNum = val;
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
    //多选框选择
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    // 单选选事件
    radioChange(id) {
      this.$emit("radioChange", id);
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.tableHeight =
        window.innerHeight - this.$refs.table.$el.offsetTop - 50;

      // 监听窗口大小变化
      let self = this;
      window.onresize = function() {
        self.tableHeight =
          window.innerHeight - self.$refs.table.$el.offsetTop - 50;
      };
    });
    //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
    //50表示你想要调整的表格距离底部的高度（你可以自己随意调整），因为我们一般都有放分页组件的，所以需要给它留一个高度
  }
};
</script>


