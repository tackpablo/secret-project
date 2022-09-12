const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // POST: REGISTER
    router.post("/", async (req, res) => {
        const {
            first_name,
            last_name,
            email,
            password,
            phone_number,
            city,
            payment_type,
            is_driver,
        } = req.body;
        const queryParams = [
            first_name,
            last_name,
            email,
            password,
            phone_number,
            city,
            payment_type,
            is_driver,
        ];
        const queryStr = `INSERT INTO users (first_name, last_name, email, password, phone_number, city, payment_type, is_driver) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
