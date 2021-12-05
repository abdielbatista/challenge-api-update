const express = require('express');
const app = express('express');
const pg = require('./src/config/database/postgresql').pool;
const routes = require('./src/infra/routes/encripRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);
app.listen(process.env.PORT || 3000);
