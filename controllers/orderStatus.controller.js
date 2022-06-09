const db = require('../db')

class OrderStatusController {
    async createOrderStatus(req, res) {
        const { orderStatusName } = req.body;
        const newOrderStatus = await db.query(`INSERT INTO "OrderStatuses" ("orderStatusName") values ($1) RETURNING * `,
            [orderStatusName]);
        res.json(newOrderStatus.rows[0])
    }

    async getOrderStatuses(req, res) {
        const orderStatuses = await db.query('SELECT * FROM "OrderStatuses"');
        res.json(orderStatuses.rows);
    }

    async getOneOrderStatus(req, res) {
        const id = req.params.id;
        const orderStatus = await db.query('SELECT * FROM "OrderStatuses" WHERE "id" = $1', [id]);;
        res.json(orderStatus.rows[0]);
    }

    async updateOrderStatus(req, res) {
        const { orderStatusName, id } = req.body;
        const orderStatus = await db.query('UPDATE "OrderStatuses" SET "orderStatusName" = $1 WHERE "id" = $2 RETURNING *',
            [orderStatusName, id]);
        res.json(orderStatus.rows);
    }

    async deleteOrderStatus(req, res) {
        const id = req.params.id;
        const orderStatus = await db.query('DELETE FROM "OrderStatuses" WHERE id = $1', [id]);;
        res.json(orderStatus.rows[0]);
    }
}

module.exports = new OrderStatusController();
