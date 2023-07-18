import express from 'express';
// or alternatively we can use 
// const express = require ('express');
import dotenv from 'dotenv';
import cors from 'cors';
import DefaultData from './default.js';
import Connection from './database/db.js';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';

const app = express();

dotenv.config();

app.use(cors()); 
app.use(bodyParser.json( { extended : true}));
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/', router);

const Port = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(Port, () => console.log(`Server successfully running on port ${Port}`));

DefaultData();
