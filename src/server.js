const express = require('express')
const routes = require('./routes')
const PORT = process.env.PORT || 5000

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))