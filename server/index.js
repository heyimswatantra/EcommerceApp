import express from 'express';
// or alternatively we can use 
// const express = require ('express');
import dotenv from 'dotenv';

import DefaultData from './default.js';

import { Connection } from './database/db.js';

const app = express();

dotenv.config();

const Port = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(Port, () => console.log(`Server successfully running on port ${Port}`));

DefaultData();