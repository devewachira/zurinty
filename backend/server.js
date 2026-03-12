import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';
import sequelize from './db/index.js';
import apiRoutes from './routes/api.js';

dns.setDefaultResultOrder('ipv4first');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "https://mwangichris.com",
    "https://www.mwangichris.com",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

/* ROOT ROUTE */
app.get('/', (req, res) => {
  res.send('API server is running');
});

/* API ROUTES */
app.use('/api', apiRoutes);

/* DATABASE CONNECTION */
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
    return sequelize.sync();
  })
  .then(() => console.log('Database tables synchronized'))
  .catch((err) => console.error('MySQL connection or synchronization error:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});