# vue-mobile--IT头条移动端

<hr>

## 1.Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 2.接口地址

### 文章列表数据

##### 请求方式

+ GET

##### 请求根路径

+ https://www.escook.cn

##### 请求URL 地址

+  /articles

##### 查询参数

| 参数名 | 数据类型 | 说明                 |
| ------ | -------- | -------------------- |
| _page  | Number   | 页码值。从 1 开始    |
| _limit | Number   | 每页展示的数据条数。 |

##### 响应的数据结构

```
[
    {
        "art_id": "8163",
        "title": "iOS原生混合RN开发最佳实践",
        "aut_id": "1111",
        "comm_count": "254",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://www.liulongbin.top:8000/resources/images/32.jpg",
                "http://www.liulongbin.top:8000/resources/images/80.jpg",
                "http://www.liulongbin.top:8000/resources/images/32.jpg"
            ]
        }
    },
    {
        "art_id": "8089",
        "title": "Typescript玩转设计模式 之 创建型模式",
        "aut_id": "1111",
        "comm_count": "24",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://www.liulongbin.top:8000/resources/images/11.jpg"
            ]
        }
    },
    {
        "art_id": "8145",
        "title": "JAVA消息确认机制之ACK模式",
        "aut_id": "1111",
        "comm_count": "99",
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    }
]
```

##### 返回参数说明

| 参数名        | 类型   | 说明                        |
| :------------ | :----- | --------------------------- |
| art_id        | string | 文章 id                     |
| title         | string | 文章标题                    |
| aut_id        | string | 作者的 id                   |
| comm_count    | string | 评论数                      |
| pubdate       | string | 发布日期                    |
| aut_name      | string | 作者名字                    |
| \|- cover     | object | 文章封面                    |
| \|---- type   | number | 封面的数量，可选值：0、1、3 |
| \|---- images | array  | 文章封面图片的 URL 数组     |
