require('dotenv').config()
let express = require('express')
let controller = require('./controller')
let massive = require('massive')
let app = express()
let { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('DB SET')
})
.catch(error => console.log(`Error is ${error}`))

app.get('/api/houses', controller.display)
app.post('/api/houses', controller.create)
app.delete('/api/house/:id', controller.delete)

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))

