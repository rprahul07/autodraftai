// generateSecret.js
const crypto = require('crypto');

// Generate a secure 64-byte random string
const secret = crypto.randomBytes(64).toString('hex');

console.log(secret);
