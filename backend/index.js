require('dotenv').config();
const express = require('express');

const dbConnect = require("./lib/dbConnect");

const app = express();
const PORT = process.env.PORT;
const noteRouter = require('./routes/noteRouter');

dbConnect();

app.use(express.json());
app.use('/api/note/', noteRouter);

app.get('/', (req, res) => {
    res.status(500).json({message : 'first route'});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


