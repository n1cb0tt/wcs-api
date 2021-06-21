const Argonautes = require('../models/Argonautes.model');

class ArgonautesController {
    // queries : validated = "true" / "false" names=srting1,string2   -----   OR SEARCH
    static getAll(req, res) {
        Argonautes.findAll(req.query, (err, results) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    }

    static getOne(req, res) {
        Argonautes.findById(parseInt(req.params.id), (err, results) => {
            if (err) {
                res.status(500).json({ error: err.toString(), detail: err });
            } else {
                res.status(200).json(results);
            }
        });
    }

    static create(req, res) {
        Argonautes.create(req.body, (err, results) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json({ id: results.insertId, ...req.body });
            }
        });
    }

    static update(req, res) {
        Argonautes.update(parseInt(req.params.id), req.body, (err, results) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    }

    static delete(req, res) {
        Argonautes.delete(parseInt(req.params.id), (err, results) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res
                    .status(200)
                    .json(
                        results.affectedRows === 1
                            ? 'Argonaute id ' + req.params.id + ' deleted'
                            : 'Argonaute id ' + req.params.id + " doesn't exist"
                    );
            }
        });
    }
}

module.exports = ArgonautesController;
