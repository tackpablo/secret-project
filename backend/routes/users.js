const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL USERS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM users ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC USER BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM users WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC USER ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
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
            id,
        ];
        const queryStr = `UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, phone_number = $5, city = $6, payment_type = $7, is_driver = $8 WHERE id = $9 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW USER
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

    // DELETE: DELETE --- DELETE USER
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM users WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
