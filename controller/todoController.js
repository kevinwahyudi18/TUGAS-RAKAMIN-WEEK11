const { Todo } = require('../models')

class TodoController {
    static async getAll(req, res, next) {
        try {
            const data = await Todo.findAll({ where: { status: 'active' } });
            if (!data.length) {
                next({ name: 'notFound' });
            } else {
                res.status(200).json(data);
            }
        } catch (err) {
            next(err);
        }
    }

    static async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const data = await Todo.findOne({ where: { id } });
            if (!data) {
                next({ name: 'notFound' });
            } else {
                res.status(200).json(data);
            }
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        const { title } = req.body;
        try {
            const data = await Todo.create({ title });
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res, next) {
        const { id } = req.params;
        const { title } = req.body;
        try {
            const data = await Todo.update({ title }, { where: { id } });
            if (!data[0]) {
                next({ name: 'notFound' });
            } else {
                res.status(200).json({ message: "Update successful" });
            }
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params;
        try {
            const data = await Todo.update({status: 'inactive'},{ where: { id } });
            if (!data) {
                next({ name: 'notFound' });
            } else {
                res.status(200).json({ message: "Delete successful" });
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TodoController;
