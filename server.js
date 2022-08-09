const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connections.js")
const SequelizeStore = require("connect-session-sequelize")
const app = express();

const PORT = process.env.PORT || 3001;
const sess = {
    secret: "placeholder",
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
        db: sequelized
    })
}

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

sequelize.sync({force: false}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running"));
});