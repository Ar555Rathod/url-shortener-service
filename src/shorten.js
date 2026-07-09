const express = require('express');
const router = express.Router();
const { customAlphabet } = require('nanoid');
const db = require('./db');
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);

function isValidUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

router.post('/', (req, res) => {
  const { url } = req.body || {};
  if (!url || !isValidUrl(url)) return res.status(400).send({error: 'invalid url'});

  const id = nanoid();
  const insert = db.prepare('INSERT INTO urls (id, url) VALUES (?, ?)');
  insert.run(id, url);

  const base = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
  res.send({ id, short: `${base}/${id}` });
});

module.exports = router;
