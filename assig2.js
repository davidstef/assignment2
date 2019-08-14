const PORT = 8080
const retUsers = require('./utils/utils')
const ServerHTML = require('./utils/server')
const app = ServerHTML() 
const users = retUsers('./data/posts.csv')

app.get('/blog', (req, res) => {
    res.render('users', { users: users })
})

app.get('/blog/:id', (req, res) => {
    var ID = req.url.split("/")[2];
    const user = users.find (function(user){
        return user.id == ID
    })
    res.render('specific-user', { users: user })
})

app.get('/', (req, res) => {
    res.redirect('/blog')
})

app.listen(PORT, (req, res) => {
    console.log("Server is running on..." + PORT)
})
