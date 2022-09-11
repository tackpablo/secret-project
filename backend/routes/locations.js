const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL LOCATIONS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM locations ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC LOCATION BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM locations WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC LOCATION ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const {
            trip_id,
            start_name,
            start_latitude,
            start_longitude,
            end_name,
            end_latitude,
            end_longitude,
        } = req.body;
        const queryParams = [
            trip_id,
            start_name,
            start_latitude,
            start_longitude,
            end_name,
            end_latitude,
            end_longitude,
            id,
        ];
        const queryStr = `UPDATE locations SET trip_id = $1, start_name = $2, start_latitude = $3, start_longitude = $4, end_name = $5, end_latitude = $6, end_longitude = $7 WHERE id = $8 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW LOCATION
    router.post("/", async (req, res) => {
        const {
            trip_id,
            start_name,
            start_latitude,
            start_longitude,
            end_name,
            end_latitude,
            end_longitude,
        } = req.body;
        const queryParams = [
            trip_id,
            start_name,
            start_latitude,
            start_longitude,
            end_name,
            end_latitude,
            end_longitude,
        ];
        const queryStr = `INSERT INTO locations (trip_id, start_name, start_latitude, start_longitude, end_name, end_latitude, end_longitude) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE LOCATIONS
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM locations WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
