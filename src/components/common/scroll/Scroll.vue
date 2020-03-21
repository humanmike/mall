<template>
    <div class="wrap" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import bScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        // scroll实例对象
        scroll: null
      }
    },
    props: {
      setClick: {
        type: Boolean,
        default: false
      },
      setPullUpLoad: {
        type: Boolean,
        default: false
      },
      setProbeType: {
        type: Number,
        default: 0,
      }
    },
    mounted() {
      this.scroll = new bScroll(this.$refs.wrap, {
        probeType: this.setProbeType,
        click: this.setClick,
        pullUpLoad: this.setPullUpLoad,
      })

      this.scroll.on('scroll', position => {
        this.$emit('move-scroll', position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('scroll-pulling-up')
      })
    },
    methods:{
      // 移动scroll
      scrollMoveTo(x=0, y=0, time=0) {
        this.scroll && this.scroll.scrollTo(x,y ,time)
      },
      // 刷新scroll
      scrollRefresh(){
        this.scroll && this.scroll.refresh()
      },
      // 完成上拉
      scrollFinish(){
        console.log('--');
        this.scroll && this.scroll.finishPullUp()
      },
      // 获取y轴
      scrollGetY(){
        return this.scroll.y
      }
    }
  }
</script>

<style scoped>

</style>