const express = require('express');
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const exphbs = require('express-handlebars');

const methodOverride = require('method-override');

const bodyParser = require('body-parser');




dotenv.config({ path: './.env'});

const app = express();

//create connection 

const db = mysql.createConnection({
    host     :  process.env.DATABASE_HOST,
    user     :  process.env.DATABASE_USER,
    password :  process.env.DATABASE_PASSWORD,
    database :  process.env.DATABASE
});



const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('views',path.join(__dirname,'views'));

//parse url-encoded bodies (as sent by html forms)
app.use(express.urlencoded({ extended:false}));

//parse json bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected...');
});

//define routes
app.use('/', require('./routes/pages'));
app.use('/auth',require('./routes/auth'));



app.listen('3003', () =>{
    console.log('Server started running on port 3003');
});


