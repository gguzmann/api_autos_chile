require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 3000;
const router = require('./src/indexRoutes');

app.use(express.json())
app.use(cors())

// ENRUTADOR
router(app)

app.listen(port, () => {
    console.log('👌 server on in port', port, `➡️  http://localhost:${port}/`)
})