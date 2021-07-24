import express from 'express'; 
const app = express(); 
const PORT: string | number = process.env.PORT || 3000; 

app.get('/', (req, res) => { 
    res.send('Express server is live'); 
})

//middleware 
app.use(express.json()); 
app.use('/api', require('./controllers/userController')); 

app.listen(PORT, () => { 
    console.log( `App is listening on PORT ${PORT}`); 
});
