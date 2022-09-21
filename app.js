const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const port = 8080

const entities = [];
const uuid = require('uuid');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/entities/', (req, res) => {
    const entity = req.body;
    entity["id"] = uuid.v4();
    entities.push(entity);
    res.json(entity);
})

app.get('/entities/:id', (req, res) => {
    const idToSearch = req.params.id
    const entity =  entities.filter( (val)=> { return val.id === idToSearch});
    res.json(entity);
  })

  app.get('/entities', (req, res) => {
    res.json(entities);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 