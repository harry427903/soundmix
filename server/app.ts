import express = require('express');
import cors = require('cors');
import bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyparser.json());

