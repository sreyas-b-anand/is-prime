const express = require('express');

const router = express.Router();
const { isPrime } = require('../services/prime.services');

//POST route 
router.post('/is-prime' , async (req, res) => {
  const { number } = req.body;

  if (typeof number !== 'number' || number < 0) {
    return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
  }

  try {
    const result = await isPrime(number);
    res.status(200).json({ isPrime: result });
    //console.log(`Number ${number} is prime: ${result}`);
  } catch (error) {
    console.error('Error checking prime:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;