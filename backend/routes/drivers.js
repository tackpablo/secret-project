const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL DRIVERS
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM drivers ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC DRIVER BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM drivers WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC DRIVER ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const {
            user_id,
            car_id,
            background_check,
            profile_photo,
            driver_license,
            vehicle_insurance,
            vehicle_registration,
            joined_date,
        } = req.body;
        const queryParams = [
            user_id,
            car_id,
            background_check,
            profile_photo,
            driver_license,
            vehicle_insurance,
            vehicle_registration,
            joined_date,
            id,
        ];
        const queryStr = `UPDATE drivers SET user_id = $1, car_id = $2, background_check = $3, profile_photo = $4, driver_license = $5, vehicle_insurance = $6, vehicle_registration = $7, joined_date = $8 WHERE id = $9 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW DRIVER
    router.post("/", async (req, res) => {
        const {
            user_id,
            car_id,
            background_check,
            profile_photo,
            driver_license,
            vehicle_insurance,
            vehicle_registration,
            joined_date,
        } = req.body;
        const queryParams = [
            user_id,
            car_id,
            background_check,
            profile_photo,
            driver_license,
            vehicle_insurance,
            vehicle_registration,
            joined_date,
        ];
        const queryStr = `INSERT INTO drivers (user_id, car_id, background_check, profile_photo, driver_license, vehicle_insurance, vehicle_registration, joined_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE DRIVER
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM drivers WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
