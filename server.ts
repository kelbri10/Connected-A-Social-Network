const express = require('express'); 
const app = express(); 
const PORT: number = 3000; 

app.get('/', (req, res) => { 
    res.send('Express server is live'); 
})

app.listen(PORT, () => { 
    console.log( `App is listening on PORT ${PORT}`); 
});
