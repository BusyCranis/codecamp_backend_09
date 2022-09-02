import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('보드 성공')
})

app.listen(3000, () => {

    console.log("서버 프로그램")

})