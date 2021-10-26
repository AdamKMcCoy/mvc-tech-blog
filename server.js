import express, { static, json, urlencoded } from 'express';
import routes from './controllers';
import sequelize, { sync } from './config/connection';
const app = express();
const PORT = process.env.PORT || 3001;
import { create } from 'express-handlebars';
import helpers from './utils/helpers';
const hbs = create({helpers});
import session, { Store } from 'express-session';
import { join } from 'path';
const SequelizeStore = require('connect-session-sequelize')(Store)
require('dotenv').config();

import morgan from 'morgan';
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(static(join(__dirname, 'public')));
app.use(json());
app.use(urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(routes);
sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
