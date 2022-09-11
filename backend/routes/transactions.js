const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL TRANSACTIONS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM transactions ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC TRANSACTION BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM transactions WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC TRANSACTION ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const {
            user_id,
            driver_id,
            timestamp,
            payment_type,
            base_amount,
            surge_amount,
            total_amount,
        } = req.body;
        const queryParams = [
            user_id,
            driver_id,
            timestamp,
            payment_type,
            base_amount,
            surge_amount,
            total_amount,
            id,
        ];
        const queryStr = `UPDATE transactions SET user_id = $1, driver_id = $2, timestamp = $3, payment_type = $4, base_amount = $5, surge_amount = $6, total_amount = $7 WHERE id = $8 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW TRANSACTION
    router.post("/", async (req, res) => {
        const {
            user_id,
            driver_id,
            timestamp,
            payment_type,
            base_amount,
            surge_amount,
            total_amount,
        } = req.body;
        const queryParams = [
            user_id,
            driver_id,
            timestamp,
            payment_type,
            base_amount,
            surge_amount,
            total_amount,
        ];
        const queryStr = `INSERT INTO transactions (user_id, driver_id, timestamp, payment_type, base_amount, surge_amount, total_amount) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE TRANSACTION
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM transactions WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
