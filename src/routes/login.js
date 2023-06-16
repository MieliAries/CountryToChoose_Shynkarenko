const express = require('express');
const router = express.Router();
const { client } = require('../db/mongo');

// Route for user registration
router.post('/login', async (req, res) => {
    const {email, password } = req.body;

    try {
        const db = client.db('CountryToChoose');
        const usersCollection = db.collection('users');

        // Check if user already exists
        const existingUser = await client.db("CountryToChoose").collection("users").findOne({email: email});
        if (existingUser) {
            const loggingUser = await client.db("CountryToChoose").collection("users").findOne({password: password});
            if(loggingUser){
                return res.status(200).json({ message: 'User was found, logging' });
            }else {
                console.error('The password is incorrect:', error);
                res.status(500).json({ message: 'The password is incorrect' });
            }
        } else {
                console.error('No user with this email:', error);
                res.status(500).json({ message: 'No user with this email' });
        }
    }
});

module.exports = router;