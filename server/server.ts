import express = require('express');

import mongoose = require('mongoose');
import dotenv = require('dotenv');

dotenv.config({path: "./local.env"});

import app = require('./app');

const DATABASE = process.env.DATABASE_URL.replace("<password>",process.env.DATABASE_PASSWORD);

