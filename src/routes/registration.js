const express = require('express');
const router = express.Router();
const { client } = require('../db/mongo');

// Route for user registration
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const db = client.db('CountryToChoose');
        const usersCollection = db.collection('users');

        // Check if user already exists
        const existingUser = await client.db("CountryToChoose").collection("users").findOne({email: email});
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create a new user
        const newUser = {
            firstName,
            lastName,
            email,
            password
        };

        // Insert the new user into the collection
        const result = await client.db("CountryToChoose").collection("users").insertOne(newUser);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;