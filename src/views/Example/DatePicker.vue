<template>
  <datrPicker :v-model="value1"></datrPicker>
</template>
<script>
import datrPicker from "@/components/common/datePicker.vue";

export default {
  components: { datrPicker },
  data() {
    return {
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
    };
  }
  
};
</script>