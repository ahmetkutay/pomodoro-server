const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const router = require('./routes/routes');

const app = express();

app.use(helmet());

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://myproductiondomain.com' : 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  exposedHeaders: 'Content-Range,X-Content-Range',
  credentials: true,
  maxAge: 600
};

app.use(cors(corsOptions));

app.use(express.json());

const reqLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100
});

app.use(reqLimiter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
