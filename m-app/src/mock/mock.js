import Mock from 'mockjs'

Mock.mock(/\todoList.mock/, {
  'code': 200,
  'data': {
    'list|1-10': [{
      'id|+1': 1,
      'title': '前端@id',
      'status': 1
    }]
  },
  message:'列表'
})