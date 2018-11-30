const express = require('express')
const md5 = require('md5')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const settings = require('./config/config')
const chalk = require('chalk');

const app = express()
const client = redis.createClient()
const vOne = require('./routes/v1')

// session storage
app.use(session({
    secret: md5('i am groot'),
    store: new redisStore({	
        host: 'localhost', port: 6379, client, ttl: 260,
    }),
    saveUninitialized: false,
    resave: false,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const route = require('./routes/route')

app.use(express.static(path.join(__dirname, '../public')))
app.get('/', route)
app.use('/api/v1/', vOne)

app.listen(settings.EXPRESS_PORT, settings.EXPRESS_HOST,
    () => console.log(chalk.blue(`Listening on port ${settings.EXPRESS_HOST}:${settings.EXPRESS_PORT}`)))
