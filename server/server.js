const express = require('express');

const app = express();

app.listen(process.env.PORT || 8081)

console.log('server running on port 8081')