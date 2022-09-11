const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL CARS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM cars ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC CAR BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM cars WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC CAR ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const { brand, model, type } = req.body;
        const queryParams = [brand, model, type, id];
        const queryStr = `UPDATE cars SET brand = $1, model = $2, type = $3 WHERE id = $4 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW CAR
    router.post("/", async (req, res) => {
        const { brand, model, type } = req.body;
        const queryParams = [brand, model, type];
        const queryStr = `INSERT INTO cars (brand, model, type) VALUES ($1, $2, $3) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE CAR
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM cars WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
