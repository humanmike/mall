<template>
    <div id="home">
        <home-nav-bar/>
        <home-tab-control class="tab-control" v-show="isShowOtherTbType"
                          ref="homeTabControlFirst" :titles="['流行','新款','精选']"
                          @tab-control-click="checkTabControlClick" />
        <scroll class=content ref="scroll"
                :setClick="true" :setPullUpLoad="true" :setProbeType="3"
                @move-scroll="checkMoveScroll"  @scroll-pulling-up="scrollFinishPullUp">
            <home-swiper :banners="banners"/>
            <home-recommend :recommends="recommends"/>
            <home-feature-view/>
            <home-tab-control ref="homeTabControlSecond" :titles="['流行','新款','精选']" @tab-control-click="checkTabControlClick"/>
            <goods :goods="showTabControlGoodList"></goods>
        </scroll>
        <back-top v-show="showBackTop" @click.native="goTop"></back-top>

    </div>
</template>

<script>
    // 导入公共组件
    // 导入首页选项
    import homeTabControl from 'components/content/tabControl/HomeTabControl'
    // 导入商品展示
    import goods from 'components/content/goods/Goods'
    // 导入滚动
    import scroll from 'components/common/scroll/Scroll'

    // 导入子组件
    // 导入顶部导航
    import homeNavBar from './childComps/HomeNavBar'
    // 导入轮播图
    import homeSwiper from './childComps/HomeSwiper'
    // 导入推荐栏数据
    import homeRecommend from './childComps/HomeRecommend'
    // 导入本周流行
    import homeFeatureView from './childComps/HomeFeatureView'

    // 导入网络请求
    import {getHomeMultidata,getHomeGoods} from 'network/home'

    // 导入混入
    import {itemImgLoadMixin,backTopMixin} from 'common/mixin'

  export default {
    name: "Home",
    // 混入
    mixins: [itemImgLoadMixin,backTopMixin],
    // 注册组件
    components: {
      homeTabControl,
      goods,
      scroll,

      homeNavBar,
      homeSwiper,
      homeRecommend,
      homeFeatureView,
    },
    // 数据存放
    data(){
      return {
        // 离开时组件高度
        leaveY: 0,
        // 是否显示第二个tb
        isShowOtherTbType: false,
        // 获取tb高度
        compsTbTop: 0,
        // 默认首页选项
        defaultTabControlType: 'pop',
        // 轮播图
        banners: [],
        // 推荐数据
        recommends: [],
        // 商品数据对象
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []},
        }
      }
    },
    // 计算属性
    computed: {
        showTabControlGoodList(){
          return this.goods[this.defaultTabControlType].list
        }
    },
    // 函数
    methods:{
      // 1. 网络请求
      // 获取轮播图和推荐数据
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      // 获取商品展示数据
      getHomeGoods(type) {
        const page = this.goods[type].page
        getHomeGoods(type, page+1).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      },

      // 2. 事件监听
      // 监听用户点击tabControl
      checkTabControlClick(index) {
        switch (index) {
          case 0:
            this.defaultTabControlType = 'pop'
            break
          case 1:
            this.defaultTabControlType = 'new'
            break
          case 2:
            this.defaultTabControlType = 'sell'
            break
        }
        this.$refs.homeTabControlSecond.currentIndex = index
        this.$refs.homeTabControlFirst.currentIndex = index
      },
      // 监听滚动
      checkMoveScroll(position){
        const positionY = - position.y
        // 监听是否显示回到顶部
        this.showBackTop = positionY > 1000
        this.isShowOtherTbType = positionY > this.compsTbTop
      },
      // 监听上拉到底
      scrollFinishPullUp(){
        this.getHomeGoods(this.defaultTabControlType)
        this.$refs.scroll.scrollFinish()
      }
    },
    // 挂载前执行
    created() {
      // 发送轮播图和推荐数据请求
      this.getHomeMultidata()
      // 商品数据获取
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    // 挂载后执行
    mounted() {
      this.$bus.$on('swiper-img-load', () => {
        this.compsTbTop = this.$refs.homeTabControlSecond.$el.offsetTop
      })
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
      this.$refs.scroll.scrollMoveTo(0, this.leaveY, 0)
    },
    deactivated() {
      // 销毁不执行组件
      this.$bus.$off('img-load', this.newRefresh)
      // 获取离开时组件高度
      this.leaveY = this.$refs.scroll.scrollGetY()
    }
  }
</script>

<style scoped>
    .content {
        position: fixed;
        /*40px意味着忽略顶部导航栏*/
        top: 40px;
        /*49px意味着忽略底部导航栏*/
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    
    .tab-control {
        position: fixed;
        z-index: 2;
        background-color: #fff;
    }
</style>