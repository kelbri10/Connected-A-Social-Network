import * as express from 'express';
import * as  mongoose from 'mongoose';


require('dotenv').config();

const app = express(); 
const PORT: string | number = process.env.PORT || 8000; 

app.get('/', (req:express.Request , res: express.Response) => { 
    res.send('Express server is live'); 
})

//middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));
//app.use('/api', require('./controllers/userController')); 
app.use(express.static('public'));

mongoose.connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.lxflj.mongodb.net/Connected?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err) =>{
        if (err) throw err; 

        console.log('connected to database youre gucci!');
    }
)


app.listen(PORT, () => { 
    console.log( `App is listening on PORT ${PORT}`); 
});
