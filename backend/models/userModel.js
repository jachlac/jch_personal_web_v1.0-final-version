var pool = require('./db');// calling data base
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'select * from users where user = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }