import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './db/index.js';
import apiRoutes from './routes/api.js';

/* Fix for __dirname in ES modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env using absolute path
dotenv.config({ path: path.resolve(__dirname, '.env') });

dns.setDefaultResultOrder('ipv4first');

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

/* API ROUTES */
app.use('/api', apiRoutes);

/* SERVE REACT BUILD */
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

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