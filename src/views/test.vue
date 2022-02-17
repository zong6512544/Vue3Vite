<!--
 * @Author: zongbao.yao
 * @Date: 2022-02-17 11:05:34
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2022-02-17 11:13:25
 * @Description: 
-->
<template>
  <div class="test">
      test
  </div>
</template>
<script lang="ts">
import { onMounted } from "vue";

export default {
  name: "test",

  components: {},

  setup(): any {
    onMounted(() => {
      console.log("test");
    });
  },

  computed: {},

  watch: {},

  methods: {},
};
</script>

<style scoped>
.test {
}
</style>
