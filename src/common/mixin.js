import {debounce} from "./utils";

// 刷新图片混入
export const itemImgLoadMixin = {
  data(){
    return {
      refresh: null,
      newRefresh: null,
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.scrollRefresh, 2000)
    this.newRefresh = this.$bus.$on('img-load', () => {
      this.refresh()
    })
  }
}

import backTop from 'components/content/backTop/BackTop'

// 回到顶部混入
export const backTopMixin = {
  components:{
    backTop
  },
  data(){
    return {
      showBackTop: false
    }
  },
  methods:{
    goTop(){
      return this.$refs.scroll.scrollMoveTo()
    }
  }
}