import express from 'express'; 
import mongoose from 'mongoose'; 

import htmlRouter from './routes/html-routes'; 
import apiRouter from './routes/api-routes'; 
import path from 'path'; 

import{initialize} from 'passport'; 

require('dotenv').config();

const app: express.Application = express(); 
const PORT: string | number = process.env.PORT || 8000; 

//expressjs middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));

app.use(express.static('client/build'));

//initializes the database 
mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lxflj.mongodb.net/Connected?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err) =>{
        if (err) throw err; 

        console.log('youre connected to db!');
    }
)

//passportjs middleware
app.use(initialize()); 
// app.use(passport.session()); 

app.use('/', htmlRouter);
app.use('/api', apiRouter); 

app.listen(PORT, () => { 
    console.log( `App is listening on PORT ${PORT}`); 
});
