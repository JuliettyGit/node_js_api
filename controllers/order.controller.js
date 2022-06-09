const db = require('../db')

class OrderController {
    async createOrder(req, res) {
        const { orderStatusId, customerId, deliverymanId, totalPrice } = req.body;
        const newUser = await db.query(
            `INSERT INTO "Orders" ("customerId", "deliverymanId", "totalPrice", "orderStatusId") values ($1, $2, $3, $4) RETURNING * `,
            [customerId, deliverymanId, totalPrice, orderStatusId]);
        res.json(newUser.rows[0])
    }

    async getOrders(req, res) {
        const orders = await db.query('SELECT * FROM "Orders"');
        res.json(orders.rows);
    }

    async getOneOrder(req, res) {
        const id = req.params.id;
        const order = await db.query('SELECT * FROM "Orders" WHERE "id" = $1', [id]);;
        res.json(order.rows[0]);
    }

    async updateOrder(req, res) {
        const { id, orderStatusId, customerId, deliverymanId, totalPrice } = req.body;
        const user = await db.query('UPDATE "Orders" SET "orderStatusId" = $1, "customerId" = $2, "deliverymanId" = $3, "totalPrice" = $4 WHERE "id" = $5 RETURNING *',
            [orderStatusId, customerId, deliverymanId, totalPrice, id]);
        res.json(user.rows);
    }

    async deleteOrder(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM "Orders" WHERE "id" = $1', [id]);;
        res.json(user.rows[0]);
    }
}

module.exports = new OrderController();
