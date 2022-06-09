const db = require('../db')

class DishCategoryController {
    async createDishCategory(req, res) {
        const { dishCategoryName } = req.body;
        const newDishCategory = await db.query(`INSERT INTO "DishCategories" ("dishCategoryName") values ($1) RETURNING * `,
            [dishCategoryName]);
        res.json(newDishCategory.rows[0])
    }

    async getDishCategories(req, res) {
        const users = await db.query('SELECT * FROM "DishCategories"');
        res.json(users.rows);
    }

    async getOneDishCategory(req, res) {
        const id = req.params.id;
        const dish = await db.query('SELECT * FROM "DishCategories" WHERE "id" = $1', [id]);;
        res.json(dish.rows[0]);
    }

    async updateDishCategory(req, res) {
        const { id, dishCategoryName} = req.body;
        const user = await db.query('UPDATE "DishCategories" SET "dishCategoryName" = $1 WHERE "id" = $2 RETURNING *',
            [dishCategoryName, id]);
        res.json(user.rows);
    }

    async deleteDishCategory(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM "DishCategories" WHERE id = $1', [id]);;
        res.json(user.rows[0]);
    }
}

module.exports = new DishCategoryController();
