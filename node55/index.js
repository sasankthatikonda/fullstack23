const express=require('express');
/************************************** express middleware ****************  */
const cors = require('cors');
const bodyParser = require('body-parser');

// const db11 = require('./db22/connect11');
/**************************************  */

/******************sqlite3***************/

// const { open } =require ('sqlite')
// const sqlite3= require('sqlite3')
// const path =require ('path');
// const dbpath=path.join(__dirname,"rcb11.db");

const sqlite3 = require('sqlite3').verbose();
require('./connection11');


// const initializeDBAndServer=()=>{
//     open({
//         filename:dbpath,
//         driver:sqlite.database
//     });
// };






/******************sqlite3***************/

const app=express();
app.use(cors());
app.use(bodyParser.json())

const { kohliFn,baseFn,maxi , checkUser22} = require('./fn22');
// const { baseFn } = require("./fn22");


app.listen(`1818`,()=>{
    console.log('listening on 1818');
});

/*********************************************************** */
// let create11 = `create table players11 (
//     id INTEGER PRIMARY KEY,
//     first_name TEXT NOT NULL,
//     last_name TEXT,
//     phone TEXT
// )`;


/*********************************************************** */

const mw22 = (req, res, next) => {
    if(req.headers.iskohli) {
        next();
    } else {
        res.send({info:'headers pampiledu ra rei'});
    }
}

app.get('/playerInfo', mw22, kohliFn);
app.get('/playersData', (req, res) => {
    let db11 = new sqlite3.Database('./db22/rcb34.db');
    let create12 = `select * from cricketers11`;
    db11.all(create12, [], (err, rows) => {
        if(err) { 
            console.log(err); 
        }
        else { 
            console.log(rows);
            res.send(rows); 
        }
    });
    db11.close();
});
app.post('/playersData', (req, res) => {
    let id = req.body.id;
    let name = req.body.player;
    let skill = req.body.skill;
    let db11 = new sqlite3.Database('./db22/rcb34.db');
    let create12 = `insert into cricketers11 values ('${id}', '${name}', '${skill}')`;
    db11.run(create12, [], (err, rows) => {
        if(err) { 
            console.log(err); 
        }
        else { 
            console.log(rows);
            res.send(true); 
        }
    });
    db11.close();
});

app.get('/users/:userId', checkUser22);
app.get('/',mw22, baseFn);
app.post('/maxi',maxi)


// get, post/put; delete
// database - postgres, sql, mongo, sqllite ----> CRUD
// req =========> req.body, req.params, req.file
// res =========> res.send, res.sendFile, res.download