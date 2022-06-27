// Separate Modules for each table
let dbmgr = require("./dbmgr");
let db = dbmgr.db;

exports.getNames = () => {
  const sql = "SELECT * FROM test";

  // let stmt = db.prepare(sql);
  let stmt = db.prepare(sql);
  let res  = stmt.all();

  return res;
}
