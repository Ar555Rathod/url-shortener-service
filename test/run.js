const tests = ['./test/db.test.js', './test/routes.test.js'];
let failed = false;
for (const t of tests) {
  try {
    require(t);
    console.log(`${t} OK`);
  } catch (err) {
    console.error(`${t} FAILED`);
    console.error(err && err.stack ? err.stack : err);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log('All test skeletons passed (placeholders)');
