const mongoose = require('mongoose');
const { mongoadr } = require('../config/env');

mongoose.connect(mongoadr, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(()=> console.log('---Connection to Mongo Database ready.\n---State: ' + mongoose.connection.readyState))
.catch((erro) => console.log('Mongo: erro na conexão: ' + erro));
