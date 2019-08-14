const Mock = require('mockjs')

const bannerData = [
  {
    id: 0,
    href: "http://www.baidu.com",
    path: 'https://p3-q.mafengwo.net/s14/M00/8E/EC/wKgE2l1NMn6Aeqv8AAbFg3uQdGk165.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
  }, {
    id: 1,
    href: "http://www.jd.com",
    path: 'https://p4-q.mafengwo.net/s14/M00/34/7C/wKgE2l1M5uOAJX3lAAmGcOXJQiQ601.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
  }, {
    id: 2,
    href: "http://www.qq.com",
    path: 'https://p1-q.mafengwo.net/s14/M00/3C/2B/wKgE2l1M6GiADDlMAAjUuL8LV8Y051.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
  }
]

let list = [
  {
    id:0,
    title:'烈日如歌|写给自己的一封夏日情诗，走进...',
    image: 'https://n4-q.mafengwo.net/s14/M00/03/B9/wKgE2l1NDzqAQ5V2AAUfnw3kBfA209.jpg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
    look: 2880,
    message: 34,
    address: '巴厘岛',
    name: '摄影师',
    author: 'https://n2-q.mafengwo.net/s11/M00/64/CC/wKgBEFtPF-GAdFxnABxu8570O8A43.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
  },
  {
    id:1,
    title:'跳伞|写给自己的一封夏日情诗，走进...',
    image: 'https://p3-q.mafengwo.net/s9/M00/8D/B9/wKgBs1fiUuqAbr3PAAIJp6Shtbg09.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
    look: 2880,
    message: 34,
    address: '三亚',
    name: '摄影师',
    author: 'https://n2-q.mafengwo.net/s11/M00/64/CC/wKgBEFtPF-GAdFxnABxu8570O8A43.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
  },
  {
    id:2,
    title:'滑雪|写给自己的一封夏日情诗，走进...',
    image: 'https://n2-q.mafengwo.net/s12/M00/9E/23/wKgED1wkf2WAC5tjABsNnU7PfNg04.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
    look: 2880,
    message: 34,
    address: '哈尔滨',
    name: '摄影师',
    author: 'https://n2-q.mafengwo.net/s11/M00/64/CC/wKgBEFtPF-GAdFxnABxu8570O8A43.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
  },
  {
    id:3,
    title:'桂林|写给自己的一封夏日情诗，走进...',
    image: 'https://n4-q.mafengwo.net/s13/M00/EF/CD/wKgEaVyvEwyATVNnAAHup5MWCzM37.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
    look: 2880,
    message: 34,
    address: '桂林',
    name: '摄影师',
    author: 'https://n2-q.mafengwo.net/s11/M00/64/CC/wKgBEFtPF-GAdFxnABxu8570O8A43.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
  },
  {
    id:4,
    title:'巴黎|写给自己的一封夏日情诗，走进...',
    image: 'https://p3-q.mafengwo.net/s13/M00/E6/ED/wKgEaVySC--AajgyAAfn0ZjKv7M02.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
    look: 2880,
    message: 34,
    address: '法国',
    name: '摄影师',
    author: 'https://n2-q.mafengwo.net/s11/M00/64/CC/wKgBEFtPF-GAdFxnABxu8570O8A43.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
  },
]

let mockData = Mock.mock({
  'list|500':[
      {
          'id|+1': 5,
          title:'@ctitle',
          image:'@image(228X218)',
          'look|300-1500':1,
          'message|300-1500':1,
          address: '@county(true)',
          name: '@cname',
          author: '@image(50X50)'
      }
  ]
})
console.log(mockData)

list = [...list, ...mockData.list]

module.exports = {
  bannerData,
  list,
}