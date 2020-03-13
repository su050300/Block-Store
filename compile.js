const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts','globalfiles.sol');
const source = fs.readFileSync(inboxPath,'utf8');
// console.log(inboxPath);
// console.log(solc.compile(source, 1));
// console.log(solc.compile(source, 1).contracts[':UserAccount']);
console.log(solc.compile(source, 1).contracts[':Certificate']);
// module.exports = solc.compile(source, 1).contracts[':BlockStore'];
