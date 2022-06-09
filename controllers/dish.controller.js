const db = require('../db')

class DishController {
    async createDish(req, res) {
        const { dishCategoryId, price, dishName } = req.body;
        const newDish = await db.query(
            `INSERT INTO "Dishes" ("dishCategoryId", "price", "dishName") values ($1, $2, $3) RETURNING * `,
            [dishCategoryId, price, dishName ]);
        res.json(newDish.rows[0])
    }

    async getDishes(req, res) {
        const dishes = await db.query('SELECT * FROM "Dishes"');
        res.json(dishes.rows);
    }

    async getOneDish(req, res) {
        const id = req.params.id;
        const dish = await db.query('SELECT * FROM "Dishes" WHERE "id" = $1', [id]);;
        res.json(dish.rows[0]);
    }

    async updateDish(req, res) {
        const { id, dishCategoryId, price, dishName } = req.body;
        const user = await db.query('UPDATE "Dishes" SET "dishCategoryId" = $1, "price" = $2, "dishName" = $3 WHERE "id" = $4 RETURNING *',
            [dishCategoryId, price, dishName, id]);
        res.json(user.rows);
    }

    async deleteDish(req, res) {
        const id = req.params.id;
        const dish = await db.query('DELETE FROM "Dishes" WHERE "id" = $1', [id]);;
        res.json(dish.rows[0]);
    }
}

module.exports = new DishController();
