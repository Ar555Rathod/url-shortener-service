const Database = require('better-sqlite3');
const path = require('path');
const dbPath = process.env.DB_PATH || path.join(__dirname, '..', 'data', 'urls.db');

const db = new Database(dbPath);

db.prepare(`CREATE TABLE IF NOT EXISTS urls (
  id TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  visits INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`).run();

module.exports = db;
