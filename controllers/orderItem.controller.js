const db = require('../db')

class OrderItemController {
    async createOrderItem(req, res) {
        const { dishId, count, orderId } = req.body;
        const newOrderItem = await db.query(`INSERT INTO "OrderItems" ("dishId", "count", "orderId") values ($1, $2, $3) RETURNING * `,
            [dishId, count, orderId]);
        res.json(newOrderItem.rows[0])
    }

    async getOrderItems(req, res) {
        const orderItems = await db.query('SELECT * FROM "OrderItems"');
        res.json(orderItems.rows);
    }

    async getOneOrderItem(req, res) {
        const id = req.params.id;
        const orderItem = await db.query('SELECT * FROM "OrderItems" WHERE "id" = $1', [id]);;
        res.json(orderItem.rows[0]);
    }

    async updateOrderItem(req, res) {
        const { id, dishId, count, orderId } = req.body;
        const orderItem = await db.query('UPDATE "OrderItems" SET "dishId" = $1, "count" = $2, "orderId" = $3 WHERE "id" = $4 RETURNING *',
            [dishId, count, orderId , id]);
        res.json(orderItem.rows);
    }

    async deleteOrderItem(req, res) {
        const id = req.params.id;
        const orderItem = await db.query('DELETE FROM "OrderItems" WHERE id = $1', [id]);;
        res.json(orderItem.rows[0]);
    }
}

module.exports = new OrderItemController();
