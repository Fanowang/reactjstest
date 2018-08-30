const express = require('express');
const routes = require('./routes/');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express()
const router = express.Router()

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', router)
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + 'not found!' })
});


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});