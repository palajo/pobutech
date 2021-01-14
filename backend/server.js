import express from 'express';
import cors from 'cors';
import path from 'path';
import orderRouter from './routers/orderRouter.js';
import productRouter from './routers/productRouter.js';
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/pobutech', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


app.use('/products', productRouter);
app.use('/orders', orderRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is run on port ${port}.`);
});