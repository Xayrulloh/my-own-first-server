const fs = require('fs')
const http = require('http')
const path = require('path')
const port = 5000
const server = http.createServer((req, res) => {
    const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)
    let whichFile = ''
    switch (req.url) {
        case '/':
            whichFile = createPath('index')
            break
        case '/users':
            whichFile = createPath('users')
            break
        default:
            whichFile = createPath('error')
    }
    res.setHeader('Content-Type', 'text/html')
    res.write(    fs.readFileSync(whichFile)    )
    res.end()
})
server.listen(port, () => {
    console.log(`server http://localhost:${port}`);
})