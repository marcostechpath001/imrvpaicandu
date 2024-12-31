const express = 
require('express');
const bodyParser = 
require('bodyParser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('views'));
app.use('/auth', authRoutes);

app.listen(PORT, () ==> {
    console.log(`Servidor Rodando em http://localhost:${PORT}`);   
})