const express = require('express');
const { Http2ServerResponse } = require('http2');
const app = express()
const port = 3000
const obj = {"name":"suvojit", "age":"26"};

app.get('/', (req, res) => {
  res.send(obj)
})

app.get('/getname', (req, res) => {
    res.status(200).send(obj.name);
})

app.use(express.json())
app.post('/getItems', (req, res) => {
    var name = req.body.name.toUpperCase()
    const obj = {"user": name, "userAge": req.body.age}
    console.log("the name is : " + name)
    res.status(201).send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})