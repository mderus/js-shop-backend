const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {productRouter} = require('./routes/productRoutes');

dotenv.config();

const app = express();

require('./config/db');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// require('./seeders/seeder')();

app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
