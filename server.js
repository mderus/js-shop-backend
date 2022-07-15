const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {productRouter} = require('./routes/productRoutes');
const {userRouter} = require('./routes/userRoutes');
const {orderRouter} = require('./routes/orderRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

app.options('*', cors());
app.use(cors({origin: 'https://cool-shortbread-f56f49.netlify.app/'}));

require('./config/db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// require('./seeders/seeder')();

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
