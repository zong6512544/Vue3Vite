<!--
 * @Author: zongbao.yao
 * @Date: 2022-02-17 11:05:34
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2022-02-17 14:11:37
 * @Description: 
-->
<template>
  <div class="test">
      test
      menuRoutes {{ menuRoutes }}
  </div>
</template>
<script lang="ts">
import { onMounted } from "vue";
import { mapGetters } from 'vuex'
export default {
  name: "test",

  components: {},

  setup(): any {
    onMounted(() => {
      console.log("test");
    });
  },

  computed: {
    ...mapGetters({
      menuRoutes: 'menuRoutesGetters'
    })
  },

  watch: {},

  methods: {},
};
</script>

<style scoped>
.test {
}
</style>
