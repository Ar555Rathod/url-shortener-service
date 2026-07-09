// very small instantiation checks
const assert = require('assert');
const shorten = require('../src/shorten');
const redirect = require('../src/redirect');
assert.ok(shorten, 'shorten module should load');
assert.ok(redirect, 'redirect module should load');
