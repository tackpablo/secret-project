const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // POST: LOGIN
    router.post("/", async (req, res) => {
        const { email, password } = req.body;
        const queryParams = [email, password];
        const queryStr = `SELECT email, password FROM users WHERE email = $1 AND password = $2;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
