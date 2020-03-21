<template>
    <div id="detail">
        <detail-nav-bar ref="detailNavBar" @detail-nav-click="detailNavClick"/>
        <scroll class=content ref="scroll"
                :setClick="true" :setPullUpLoad="true" :setProbeType="3"
                @move-scroll="checkMoveScroll">
            <detail-swiper :detailBanners="detailBanners"/>
            <detail-goods-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-params-info ref="detailParamsInfo" :goodsParamInfo="goodsParamInfo"/>
            <detail-comment-info ref="detailCommentInfo" :commentInfo="commentInfo"/>
            <detail-shop-img-info :shopDetailInfo="shopDetailInfo" @detail-img-load="detailImgLoad"/>
            <goods ref="detailRecommendInfo" :goods="recommendInfo"></goods>
        </scroll>
        <back-top v-show="showBackTop" @click.native="goTop"/>
        <detail-bottom-bar @add-shop-cart="addShopCart"/>
    </div>
</template>

<script>
    // 导入子组件
    // 导入顶部导航栏
    import detailNavBar from './chilComps/DetailNavBar'
    // 导入轮播图组件
    import detailSwiper from './chilComps/DetailSwiper'
    // 导入商品概述组件
    import detailGoodsInfo from './chilComps/DetailGoodsInfo'
    // 导入商家概述
    import detailShopInfo from './chilComps/DetailShopInfo'
    // 导入商品参数概述
    import detailParamsInfo from './chilComps/DetailParamsInfo'
    // 导入商品明细图
    import detailShopImgInfo from './chilComps/DetailShopImgInfo'
    // 导入评论组件
    import detailCommentInfo from './chilComps/DetailCommentInfo'
    // 导入底部购物车
    import detailBottomBar from './chilComps/DetailBottomBar'

    // 导入公共组件
    // 导入推荐数据组件
    import goods from 'components/content/goods/Goods'
    // 导入滚动
    import scroll from 'components/common/scroll/Scroll'

    // 导入网络请求
    import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'


    // 导入混入
    import {itemImgLoadMixin,backTopMixin} from 'common/mixin'

    // 导入辅助函数
    import {mapActions} from 'vuex'
  export default {
    name: "Detail",
    // 混入
    mixins: [itemImgLoadMixin,backTopMixin],
    // 注册组件
    components: {
      goods,
      scroll,

      detailNavBar,
      detailSwiper,
      detailGoodsInfo,
      detailShopInfo,
      detailParamsInfo,
      detailShopImgInfo,
      detailCommentInfo,
      detailBottomBar,
    },
    // 数据存放
    data(){
      return {
        // 高度索引
        compsTopIndex: null,
        // 获取高度组件函数
        getCompsTopList: null,
        // 各组件高度数据
        compsTopList: [],
        // 唯一标识iid
        iid: null,
        // 详情轮播图
        detailBanners: [],
        // 商品概述信息
        goods: {},
        // 商家概述信息
        shop: {},
        // 商品参数信息
        goodsParamInfo: {},
        // 商品图片信息
        shopDetailInfo: {},
        // 评论信息
        commentInfo: {},
        // 推荐信息
        recommendInfo: []
      }
    },
    // 计算属性
    computed: {

    },
    // 函数
    methods:{
      // 0.辅助函数相关
      ...mapActions(['optionShopCart']),
      // 1.网络请求相关
      getDetail() {
        getDetail(this.iid).then(res => {
          // 数据整理
          const data = res.result
          const itemInfo = data.itemInfo
          const columns = data.columns
          const shopInfo = data.shopInfo
          const itemParams = data.itemParams
          const rate = data.rate

          // 轮播图数据获取
          this.detailBanners = itemInfo.topImages

          // 获取商品概述信息
          this.goods = new Goods(itemInfo, columns, shopInfo)

          // 获取商家概述信息
          this.shop = new Shop(shopInfo)

          // 获取商品参数信息
          this.goodsParamInfo = new GoodsParam(itemParams.info, itemParams.rule)

          // 获取商品图片信息
          this.shopDetailInfo = data.detailInfo

          // 获取评论信息
          // 有些商品可能没有评论数据，所以获取的时候先判断下
          if (rate.cRate != 0) {
            this.commentInfo = rate.list[0]
          }

        })
      },
      // 获取推荐数据
      getRecommend(){
        getRecommend().then(res => {
          this.recommendInfo = res.data.list
        })
      },
      // 2.事件监听
      addShopCart(){
        // 从data中获取该商品的信息传递给vuex
        const product = {}
        // 把对应商品数据加了的对象中
        // 原本应该是从这个接口获取数据，但是因为这里有时候返回不到所以从轮播图获取
        product.image = this.detailBanners[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        this.optionShopCart(product).then(res => {
          this.$toast.showToast(res)
        })

      },
      // 监听滚动
      checkMoveScroll(position) {
        const positionY = -position.y
        // 是否显示回到顶部按钮
        this.showBackTop = positionY > 1000
        // 滚动修改navbar
        for (let i = 0; i < this.compsTopList.length - 1; i++) {
          if (this.compsTopIndex !=i &&
              (positionY >= this.compsTopList[i] && positionY < this.compsTopList[i+1])) {
            this.compsTopIndex = i
            this.$refs.detailNavBar.currentIndex = this.compsTopIndex
          }
        }
      },
      // 监听nav点击跳转对应高度
      detailNavClick(index) {
        this.$refs.scroll.scrollMoveTo(0, -this.compsTopList[index],300)
      },
      // 监听商品图片
      detailImgLoad() {
        this.refresh()
        // 再次获取高度数据
        this.getCompsTopList()
      },

    },
    // 挂载前执行
    created() {
      // 获取商品标识iid
      this.iid = this.$route.params.iid
      // 发送获取轮播图请求
      this.getDetail()
      // 发送获取推荐数据请求
      this.getRecommend()
    },
    // 挂载后执行
    mounted() {
      this.getCompsTopList = () => {
        this.compsTopList = []
        this.compsTopList.push(0)
        this.compsTopList.push(this.$refs.detailParamsInfo.$el.offsetTop)
        this.compsTopList.push(this.$refs.detailCommentInfo.$el.offsetTop)
        this.compsTopList.push(this.$refs.detailRecommendInfo.$el.offsetTop)
        this.compsTopList.push(Number.MAX_VALUE)
      }
    },
  }
</script>

<style scoped>
    .content {
        position: fixed;
        /*40px意味着忽略顶部导航栏*/
        top: 40px;
        /*107px意味着忽略底部导航栏*/
        bottom: 107px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
</style>