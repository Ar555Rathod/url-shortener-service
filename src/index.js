require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const shorten = require('./shorten');
const redirect = require('./redirect');

app.use('/shorten', shorten);
app.use('/', redirect);

app.get('/health', (req, res) => res.send({status: 'ok'}));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
