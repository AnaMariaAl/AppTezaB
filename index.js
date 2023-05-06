const { request } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')





mongoose.connect('mongodb://localhost/node_auth',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const routes = require('./routes/routes')


app = express()
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))


//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.json())

app.use('/api',routes)

//userListRoutes(app);
app.listen(8000)