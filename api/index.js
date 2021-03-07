const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors)
const port = 8080

app.post('/images', (req, res) => {
  console.log(req)
  res.json({
    "success" : 1,
    "file": {
      "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
      // ... and any additional fields you want to store, such as width, height, color, extension, etc
    }})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

