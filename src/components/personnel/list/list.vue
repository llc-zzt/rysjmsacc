<template>
  <div>
    <v-header :HData="HData"></v-header>
    <div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header.vue'
  export default {
    components: {
      'v-header': header
    },
    data() {
      return {
        HData: {
          title: '人员列表',
          name: null, // 列表
          url: '/'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
