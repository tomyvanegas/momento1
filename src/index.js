const express = require('express');
const morgan = require('morgan');
const app = express();

const port = ('3000')

// Levantamiento de Routers al iniciar el servidor



//middleware}

app.use(morgan('dev'));
app.use(express.json());
app.use(require('./Routers/routers'))


app.listen(port, () =>{
    console.log(`Corriendo por el puerto ${port}`)
}) 

