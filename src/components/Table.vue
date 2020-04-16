<template>
    <div class="data-table">
        <el-table
             :data="tableData"
             style="width: 100%"
             border
             v-loading="loading">
            <el-table-column
                    label="序号"
                    type="index"
                    width="50"
                    align="center">
                <template scope="scope">
                    <!-- 有分页时，序号显示 -->
                    <span v-if="pageObj">{{(pageObj.currentPage - 1)*pageObj.size + scope.$index + 1}}</span>
                    <!-- 无分页时，序号显示 -->
                    <span v-else>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <template v-for="(col, index) in columns">
                <!-- 操作列/自定义列 -->
                <slot v-if="col.slot" :name="col.slot"></slot>
                <!-- 普通列 -->
                <el-table-column v-else
                                 :key="index"
                                 :prop="col.prop"
                                 :label="col.label"
                                 :width="col.width"
                                 :formatter="col.formatter"
                                 align="center">
                </el-table-column>
            </template>
        </el-table>
        <!-- 是否调用分页 -->
        <el-pagination v-if="pageObj" background
                    layout="total, prev, pager, next, jumper"
                    :page-size="pageObj.size"
                    :total="pageObj.total"
                    :current-page="pageObj.currentPage"
                    @current-change="pageObj.func">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "dataTable",
        props: ['tableData', 'columns', 'loading', 'pageObj']
    }
</script>