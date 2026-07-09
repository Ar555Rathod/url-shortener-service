const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const row = db.prepare('SELECT url FROM urls WHERE id = ?').get(id);
  if (!row) {
    if (req.accepts('html')) return res.status(404).send('<h1>Not Found</h1>');
    return res.status(404).send({error: 'not found'});
  }
  db.prepare('UPDATE urls SET visits = visits + 1 WHERE id = ?').run(id);
  res.redirect(302, row.url);
});

module.exports = router;
