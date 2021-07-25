"use strict";
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('Express server is live');
});
//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', require('./controllers/userController')); 
app.use(express.static('public'));
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.lxflj.mongodb.net/Connected?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        throw err;
    console.log('connected to database youre gucci!');
});
app.use(require('./routes/api-routes'));
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});
