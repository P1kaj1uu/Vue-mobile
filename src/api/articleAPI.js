// 文章相关的API接口,都封装在这个模块中
import request from '../utils/request'

// 向外按需导出一个API函数
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    // 请求参数
    params: {
      // 页码值
      _page: _page,
      // 每页要展示的数据条数
      _limit: _limit
    }
  })
}
