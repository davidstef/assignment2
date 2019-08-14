const express = require('express')
const mustacheExpress = require("mustache-express")
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '../views')

function ServerHTML() {
    const app = express()
    app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
    app.set('views', VIEWS_PATH)
    app.set('view engine', 'mustache')
    return app
}

module.exports = ServerHTML