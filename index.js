const express = require('express')
const app = express()

// 启动静态资源服务
app.use(express.static('public'))

// 后端路由
app.get('/data', (req, res) => {
  // 响应数据
  let info = {
    username: 'lisi',
    age: 12
  }
  res.json(info)
})

app.listen(8888, () => {
  console.log('running...')
})