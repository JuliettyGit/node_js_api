const db = require('../db')

class IngredientController {
    async createIngredient(req, res) {
        const { price, ingredientName } = req.body;
        const newIngredient = await db.query(`INSERT INTO "Ingredients" ("price", "ingredientName") values ($1, $2) RETURNING * `,
            [price, ingredientName]);
        res.json(newIngredient.rows[0])
    }

    async getIngredients(req, res) {
        const ingredients = await db.query('SELECT * FROM "Ingredients"');
        res.json(ingredients.rows);
    }

    async getOneIngredient(req, res) {
        const id = req.params.id;
        const ingredient = await db.query('SELECT * FROM "Ingredients" WHERE "id" = $1', [id]);;
        res.json(ingredient.rows[0]);
    }

    async updateIngredient(req, res) {
        const { id, price, ingredientName  } = req.body;
        const ingredient = await db.query('UPDATE "Ingredients" SET "price" = $1, "ingredientName" = $2 WHERE "id" = $3 RETURNING *',
            [price, ingredientName , id]);
        res.json(ingredient.rows);
    }

    async deleteIngredient(req, res) {
        const id = req.params.id;
        const ingredient = await db.query('DELETE FROM "Ingredients" WHERE id = $1', [id]);;
        res.json(ingredient.rows[0]);
    }
}

module.exports = new IngredientController();
