const db = require('../db')

class UserRoleController {
    async createRole(req, res) {
        const { userRoleName } = req.body;
        const newUserRole = await db.query(`INSERT INTO "UserRoles" ("userRoleName") values ($1) RETURNING * `, [userRoleName]);

        res.json(newUserRole.rows[0])
    }

    async getUserRoles(req, res) {
        const userRoles = await db.query('SELECT * FROM "UserRoles"');
        res.json(userRoles.rows);
    }

    async getRole(req, res) {
        const id = req.params.id;
        const role = await db.query('SELECT * FROM "UserRoles" WHERE "id" = $1', [id]);;
        res.json(role.rows[0]);
    }

    async updateRole(req, res) {
        const { id, userRoleName } = req.body;
        const user = await db.query('UPDATE "UserRoles" SET "userRoleName" = $1 WHERE "id" = $2 RETURNING *',
            [userRoleName, id]);
        res.json(user.rows);
    }

    async deleteRole(req, res) {
        const id = req.params.id;
        const roles= await db.query('DELETE FROM "UserRoles" WHERE "id" = $1', [id]);;
        res.json(roles.rows[0]);
    }
}

module.exports = new UserRoleController();
