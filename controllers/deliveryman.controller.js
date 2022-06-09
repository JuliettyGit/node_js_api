const db = require('../db')

class DeliverymanController {
    async createDeliveryman(req, res) {
        const { firstName, lastName, phoneNumber } = req.body;
        const newDeliveryman = await db.query(`INSERT INTO "Deliverymans" ("firstName", "lastName", "phoneNumber") values ($1, $2, $3) RETURNING * `,
            [firstName, lastName, phoneNumber]);
        res.json(newDeliveryman.rows[0])
    }

    async getDeliverymans(req, res) {
        const users = await db.query('SELECT * FROM "Deliverymans"');
        res.json(users.rows);
    }

    async getOneDeliveryman(req, res) {
        const id = req.params.id;
        const deliveryman = await db.query('SELECT * FROM "Deliverymans" WHERE "id" = $1', [id]);;
        res.json(deliveryman.rows[0]);
    }

    async updateDeliveryman(req, res) {
        const { id, firstName, lastName, phoneNumber } = req.body;
        const user = await db.query('UPDATE "Deliverymans" SET "firstName" = $1, "lastName" = $2, "phoneNumber" = $3 WHERE "id" = $4 RETURNING *',
            [firstName, lastName, phoneNumber, id]);
        res.json(user.rows);
    }

    async deleteDeliveryman(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM "Deliverymans" WHERE id = $1', [id]);;
        res.json(user.rows[0]);
    }
}

module.exports = new DeliverymanController();
