<template>
  <div>
    <el-button
      v-for="(tableOperate,index) in tableOperateList"
      :key="index"
      :icon="tableOperate.icon"
      :type="tableOperate.type"
      size="medium"
    >{{tableOperate.name}}</el-button>
 </div>
</template>
<style>

</style>
<script>
export default {
  props: {
    tableOperateList: {
      type: Array
    }
  }
};
</script>