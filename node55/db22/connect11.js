const sqlite3 = require('sqlite3').verbose();
let db11 = new sqlite3.Database('./db22/rcb11.db', (err) => {
    if(err) { console.log(err); }
    else { 
        console.log('connected to rcb11 db'); 
    }
});

module.exports = {
    db11: db11
}