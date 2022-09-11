const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL TRIPS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM trips ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC TRIP BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM trips WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC TRIP ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const {
            user_id,
            driver_id,
            transaction_id,
            start_location,
            end_location,
            trip_start_time,
            trip_end_time,
            trip_wait_time,
            price,
        } = req.body;
        const queryParams = [
            user_id,
            driver_id,
            transaction_id,
            start_location,
            end_location,
            trip_start_time,
            trip_end_time,
            trip_wait_time,
            price,
            id,
        ];
        const queryStr = `UPDATE trips SET user_id = $1,
        driver_id = $2,
        transaction_id = $3,
        start_location = $4,
        end_location = $5,
        trip_start_time = $6,
        trip_end_time = $7,
        trip_wait_time = $8,
        price = $9 WHERE id = $10 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW TRIP
    router.post("/", async (req, res) => {
        const {
            user_id,
            driver_id,
            transaction_id,
            start_location,
            end_location,
            trip_start_time,
            trip_end_time,
            trip_wait_time,
            price,
        } = req.body;
        const queryParams = [
            user_id,
            driver_id,
            transaction_id,
            start_location,
            end_location,
            trip_start_time,
            trip_end_time,
            trip_wait_time,
            price,
        ];
        const queryStr = `INSERT INTO trips (user_id, driver_id, transaction_id, start_location, end_location, trip_start_time, trip_end_time, trip_wait_time, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE TRIP
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM trips WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
