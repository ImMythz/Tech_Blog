const path = require('path');
const express = require('express');
const routes = require('./controllers')
const session = require('express-session');
const sequelize = require('./config/config');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

// Sets up sessions storage to use Sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session for sequelize
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false, 
    saveUninitialized: true, 
    store: new SequelizeStore({
        db: sequelize
    })
};

// Creates the session and registers it as a middleware
app.use(session(sess));

// Creates express handlebars instance and registers helpers
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    sequelize.sync({ force: false });
})
