import { Dao } from "./dao";
var db = new Dao();

db.run(
  `
  CREATE TABLE IF NOT EXISTS ping (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
  )
  `
);
