const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const ORIGIN = `https://${process.env.ALIAS_NAME}.${process.env.ENVIRONMENT_NAME}.${process.env.DOMAIN_NAME}`

app.use(function(req, res, next) {
   res.header("Content-Type","application/json")
   res.header("Access-Control-Allow-Origin", ORIGIN);
   res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

const port = 1337
app.listen(port, () => {
})

app.get('/api', (req, res) => {
   res.send({'message':'Hello World'});
});

console.log(process.env.ALIAS_NAME);