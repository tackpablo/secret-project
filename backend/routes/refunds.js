const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL REFUNDS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM refunds ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC REFUND BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM refunds WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC REFUND ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const { user_id, driver_id, timestamp, reason, price } = req.body;
        const queryParams = [user_id, driver_id, timestamp, reason, price, id];
        const queryStr = `UPDATE refunds SET user_id = $1, driver_id = $2, timestamp = $3, reason = $4, price = $5 WHERE id = $6 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW REFUND
    router.post("/", async (req, res) => {
        const { user_id, driver_id, timestamp, reason, price } = req.body;
        const queryParams = [user_id, driver_id, timestamp, reason, price];
        const queryStr = `INSERT INTO refunds (user_id, driver_id, timestamp, reason, price) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE REFUND
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM refunds WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
