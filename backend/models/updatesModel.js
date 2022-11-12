var pool = require('./db');// calling data base

async function getUpdates() {
    var query = 'select * from updates';
    var rows = await pool.query(query);
    return rows;

}

async function insertNew(obj) {
    try { //el try y el catch me permite el manejo de errores, que la novedad se cargue bien
        var query = "insert into updates set ?";
        var rows = await pool.query(query, [obj]) //pasa los valores a traves de los objetoss
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNewsById(id) { //especifico que borre en base a id y no segun objetos para que cuando haga el barrido no borre todos, sino solo el del id seleccionado
        var query = "delete from updates where id = ?";
        var rows = await pool.query(query, [id]); 
        return rows;
    }

module.exports = { getUpdates, insertNew, deleteNewsById }