# Number Classification API

## Project Overview
This API takes a number and returns its classification along with a fun fact. It checks if the number is prime, perfect, Armstrong, odd/even, and provides a fun fact from the Numbers API.

## Tech Stack
- Node.js
- Express
- CORS
- Numbers API

## Installation
1. Clone the repo:
git clone https://github.com/your-username/number-classification-api.git

Install dependencies:
npm install

Start the server locally:
npm start

API Usage
GET /api/classify-number?number={number}
Example:
curl "http://localhost:3000/api/classify-number?number=371"
Response:
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
Deployment URL: https://hng-number-classification-api-2.onrender.com/api/classify-number
API Live on Render
