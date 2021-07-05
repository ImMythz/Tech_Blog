const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./controllers');
const path = require('path')
const helpers = require('./utils/helpers');


// Sets up sessions storage to use Sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    sercret: 'Super secret secret',
    cookie: {},
    resave: False, 
    saveUninitialized: true, 
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;

// Creates the sessiona and registers it as a middleware
app.use(session(sess))

// Creates express handlebars instance and registers helpers
const hbs = exphbs.create({ helpers })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
    sequelize.sync({ force: false })
})


module.require = sequelize