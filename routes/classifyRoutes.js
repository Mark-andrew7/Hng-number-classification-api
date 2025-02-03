const express = require('express');
const { checkPrime, checkPerfect, checkArmstrong, getDigitSum, getFunFact } = require('../utils/numberUtils');

const router = express.Router();

router.get('/classify-number', async (req, res) => {
    const { number } = req.query;

    // Validate input (Ensure number is an integer)
    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({
            "number": number,
            "error": true,
            "message": "Invalid input. Please provide a valid integer."
        });
    }

    const num = parseInt(number);
    
    // Check properties
    const isPrime = checkPrime(num);
    const isPerfect = checkPerfect(num);
    const isArmstrong = checkArmstrong(num);
    const isOdd = num % 2 !== 0;
    const digitSum = getDigitSum(num);
    const properties = [];

    if (isArmstrong) properties.push("armstrong");
    properties.push(isOdd ? "odd" : "even");

    // Fetch Fun Fact
    const funFact = await getFunFact(num);

    return res.json({
        "number": num,
        "is_prime": isPrime,
        "is_perfect": isPerfect,
        "properties": properties,
        "digit_sum": digitSum,
        "fun_fact": funFact
    });
});

module.exports = router;
