/* TO BE WORKING PROPERLY, IT NEEDS TO BE LAUNCHED WITH NODE_ENV=local
 * E.g.
 * $ NODE_ENV=local node test-graphql-locally.js
 */
const app = require('./functions/api').handler;

const port = 4000;

app.listen(port);
console.log(`listening on port ${port}`);
