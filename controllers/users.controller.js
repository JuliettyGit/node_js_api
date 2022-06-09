const db = require('../db')

class UsersController {
    async createUser(req, res) {
        const { email, password, userRoleId } = req.body;
        const newUser = await db.query(`INSERT INTO "Users" ("email", "password", "userRoleId") values ($1, $2, $3) RETURNING * `,
            [email, password, userRoleId]);
        res.json(newUser.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM "Users"');
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM "Users" WHERE "id" = $1', [id]);;
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const { id, email, password, userRoleId } = req.body;
        const user = await db.query('UPDATE "Users" SET "email" = $1, "password" = $2, "userRoleId" = $3 WHERE "id" = $4 RETURNING *',
            [email, password, userRoleId, id]);
        res.json(user.rows);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM "Users" WHERE id = $1', [id]);;
        res.json(user.rows[0]);
    }
}

module.exports = new UsersController();
