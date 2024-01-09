const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./db22/rcb34.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the chinook database.");
  }
});

db.serialize(() => {
  let query44 = `create table if not exists cricketers11 (
    id INTEGER PRIMARY KEY,
    player TEXT,
    skill TEXT
  )`;
  
  db.each(query44, (err, row) => {
    if (err) { console.error(err.message); }
    else { console.log(row.id + "\t" + row.name); }
  });

});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
