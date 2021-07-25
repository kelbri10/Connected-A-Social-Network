import express from 'express'; 
import mongoose from 'mongoose'; 
import htmlRouter from './routes/html-routes'; 
import apiRouter from './routes/api-routes'; 

require('dotenv').config();

const app: express.Application = express(); 
const PORT: string | number = process.env.PORT || 8000; 

app.get('/', (req:express.Request , res: express.Response) => { 
    res.send('Express server is live'); 
})

//middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));
//app.use('/api', require('./controllers/userController')); 
app.use(express.static('./client/public'));

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lxflj.mongodb.net/Connected?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err) =>{
        if (err) throw err; 

        console.log('youre connected to db!');
    }
)

app.use('/', htmlRouter);
app.use('/api', apiRouter); 

app.listen(PORT, () => { 
    console.log( `App is listening on PORT ${PORT}`); 
});
