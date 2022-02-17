<template>
  <div class="page-test">
    page-test menuRoutes
    {{ name }}
    {{ menuRoutes }}
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'page-test-page',

  components: {},

  setup(): any {
    const name: string = 'yzb'
    onMounted(() => {
      console.log('page-test')
    })

    return {
      name
    }
  },

  computed: {
    ...mapState({
      menuRoutes: (state: any) => state.menuRoutes
    })
  },

  watch: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.page-test {
  background: pink;
}
</style>
