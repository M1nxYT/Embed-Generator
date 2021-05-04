const express = require('express') // require express
const app = express() // set app to express()
app.get('/', (req, res) => { // if the incoming req is at the homepage endpoint
  res.send(`<head><link type="application/json+oembed" href="https://Embed-Generator.minxteryt.repl.co/json?${req.query.text}"></head><body><h1 class="center"</body>`)
})
app.get('/json', (req, res) => { // if the incoming req is at the json endpoint
  res.json({"author_name" : Object.keys( req.query )[0]}) // passthru data from url and return formatted JSON
})
app.listen(3000, () => console.clear()) // Start express on the defined port and clear the startup info