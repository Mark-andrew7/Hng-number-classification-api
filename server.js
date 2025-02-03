const express = require('express');
const cors = require('cors');
const classifyRoutes = require('./routes/classifyRoutes');

const app = express();
app.use(cors());

// Use routes
app.use('/api', classifyRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
