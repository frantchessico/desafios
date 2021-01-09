const mongoose = require('mongoose');

const devUrl = 'mongodb://localhost/portfolio'
const prodUrl = 'mongodb+srv://francisco-savanapoint:Luisa@jaime1996@cluster0.jao6i.mongodb.net/portfolio?retryWrites=true&w=majority';

mongoose.connect(prodUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database is connected'))
.catch((err) => console.log('Database is not connected', err))