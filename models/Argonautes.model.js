const pool = require('../config/dbConnection');
const ArgonauteQueryBuilder = require('../utils/ArgonauteQueryBuilder');

const clauseSelect = 'SELECT id, name FROM argonaute';

class ArgonautesModel {
    static findAll(query, next) {
        let queryClauses = ArgonauteQueryBuilder.select(query);
        pool.query(`${clauseSelect}${queryClauses.where};`, next);
    }

    static findById(id, next) {
        pool.query(clauseSelect + ' WHERE id = ?', [id], next);
    }

    static create(body, next) {
        let fields = Object.keys(body);
        let values = Object.values(body);
        pool.query(`INSERT INTO argonaute (${fields}) VALUES (?)`, [values], next);
    }

    static update(id, body, next) {
        let entries = Object.entries(body).map((entry) => entry[0] + " = '" + entry[1] + "'");
        console.log('`UPDATE argonaute SET ${entries} WHERE id=?;`, [id]: ', `UPDATE argonaute SET ${entries} WHERE id=?;`, [id]);
        pool.query(`UPDATE argonaute SET ${entries} WHERE id=?;`, [id], next);
    }

    static delete(id, next) {
        pool.query('DELETE FROM author WHERE id = ?', [id], next);
    }
}

module.exports = ArgonautesModel;
