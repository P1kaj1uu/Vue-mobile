<template>
    <div class="home-container">
      <!-- 头部区域 -->
      <van-nav-bar title="IT头条" :fixed="true"/>
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="refreshing" :disabled="finished" @refresh="onRefresh">
        <!-- 上拉加载 -->
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
          <!-- 内容区域 -->
          <ArticleInfo
          v-for="item in articleList"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :comment="item.comm_count"
          :publish="item.pubdate"
          :cover="item.cover">
          </ArticleInfo>
        </van-list>
      </van-pull-refresh>
    </div>
</template>

<script>
// 按需导入API接口模块
import { getArticleListAPI } from '@/api/articleAPI.js'

// 导入内容区域组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

// 鲁大师 提供了许多牛逼的函数 节流的函数、防抖的函数、操作数组的一系列函数、操作对象的一系列函数（对象的深拷贝、浅拷贝）
import _ from 'lodash'
let fn = null

export default {
  name: 'Home',
  // 注册导入的组件
  components: {
    ArticleInfo
  },
  data () {
    return {
      // 页码值
      page: 1,
      // 每页展示的数据条数
      limit: 10,
      // 文章的数组
      articleList: [],
      // 配置上拉加载
      // 是否正在加载下一页数据,如果loading为true则不会反复触发load事件
      // 每当下一页数据请求回来之后,一定要把loading从true改为false
      loading: true,
      // 所有数据是否加载完毕了,如果没有更多数据了一定要把finished改为true
      finished: false,
      // 配置下拉刷新
      // 是否正在下拉刷新
      refreshing: false
    }
  },
  methods: {
    // 封装获取文章数据的方法
    async initArticleList (isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        // 下拉刷新[新数据,旧数据]
        this.articleList = [...res, ...this.articleList]
        this.refreshing = false
      } else {
        // 上拉刷新[旧数据,新数据]
        this.articleList = [...this.articleList, ...res]
        this.loading = false
      }
      if (res.length === 0) {
        // 没有更多数据了,直接把finished改为true表示加载完了
        this.finished = true
      }
    },
    // 上拉加载的方法
    // 只要onLoad方法被调用,就应该请求下一页的数据
    onLoad () {
      // 让页面值加1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新的方法
    onRefresh () {
      // 让页面值加1
      this.page++
      // 重新请求接口获取数据
      this.initArticleList(true)
    },
    recordTopHandler () {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
    }
  },
  created () {
    // 调用axios
    this.initArticleList()
  },
  activated () {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  deactivated () {
    window.removeEventListener('scroll', fn)
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
// .van-nav-bar {
//   background-color: #007bff;
// }
// // 覆盖第三方样式不生效时前面加/deep/
// /deep/ .van-nav-bar__title {
//   color: white;
// }
</style>
