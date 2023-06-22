import express  from "express";
import {createServer } from 'http'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

//URL to connect
const url = 'mongodb://127.0.0.1:27017/test'

//Connection to database
mongoose.connect(url).then(() => console.log('database connected'))

const app = express()

const http = createServer(app)

app.use(bodyParser.json())


http.listen(8000, () => {
	console.log(`App server listening on port 8000`)
})

