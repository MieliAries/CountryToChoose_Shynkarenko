const express = require('express');
const router = express.Router();
const { client } = require('../db/mongo');

// Route for user registration
router.post('/addPreference', async (req, res) => {
    const { Climate,
        Economics,
        Energy,
        Safety,
        LifeCost,
        LifeLvl,
        Health,
        CrimeRate,
        Pollution } = req.body;

    try {
        const db = client.db('CountryToChoose');

        // Create a new user
        const newPreference = {
            Climate,
            Economics,
            Energy,
            Safety,
            LifeCost,
            LifeLvl,
            Health,
            CrimeRate,
            Pollution
        };

        // Insert the new user into the collection
        const result = await client.db("CountryToChoose").collection("preferences").insertOne(newPreference);
        res.status(201).json({ message: 'Preference added successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;