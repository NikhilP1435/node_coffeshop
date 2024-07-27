
const express = require('express')
const app = express()

const db = require('./db');


const menuItem = require('./models/menuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to my Cofeeshop... How i can help you?')
});



app.get('/chicken', (req, res) => {
  res.send('sure sir, i would love to serve chicken')
})

app.get('/idli', (req, res) => {
  var customized_idli = {
    name: 'rava idli',
    size: '10 cm diameter',
    is_sambhar: true,
    is_chutney: false
  }
  res.send(customized_idli)
});

// Import the router files
   const personRoutes = require('./routes/personRoutes');
   const menuItemRoutes = require('./routes/menuItemRoutes');

   app.use('/nikhil', personRoutes);
   app.use('/menuItem', menuItemRoutes);

// app.listen(3000)
app.listen(3000, () => {
  console.log('listening on port 3000')

});