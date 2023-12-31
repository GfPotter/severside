const express = require('express'), http = require('http');
const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
const app = express();
app.use(bodyParser.json());
app.use('/dishes', dishRouter)
app.use('/leaders', leaderRouter)
app.use('/promotions', promoRouter)
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
