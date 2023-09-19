const express = require("express");

const usersRouter = require('./routers/usersRouter');

const app = express();

app.use(express.json());

app.use(express.static('public'));

const port = process.env.PORT || 4001;

app.use('/usersRouter', usersRouter)




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
