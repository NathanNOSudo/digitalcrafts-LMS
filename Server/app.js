const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
// const models = require('./models')
const path = require('path')

const VIEWS_PATH = path.join(__dirname, '/views')

app.use(express.urlencoded())

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set("views", VIEWS_PATH)
app.set("view engine", "mustache")


app.use('/uploads', express.static('uploads'))
app.use('/assets', express.static('assets'))

app.get("/", (req, res) => {
    res.render("main")
})

app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})