/** Database setup for BizTime. */
// createdb biztime_test
// psql biztime_test 



const { Client } = require("pg");

// const DB_URI = (process.env.NODE_ENV === 'test') ?
//     "postgresql:///biztime_test" :
//     "postgresql:///biztime";

let db = new Client({
    connectionString: "postgresql:///biztime"
});

db.connect();

module.exports = db;