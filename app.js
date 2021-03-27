'use strict';

import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const express = require('express')
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import * as op from "./orderProcessing.js";

const app = express()
const port = 3000

//var bodyParser = require('body-parser')
app.use(express.urlencoded({extended:true}))


const path=require("path")
app.use(express.static(path.join(__dirname, 'public')));

app.post('/PlaceOrder', (req, res) => {
  op.placeOrder(req,res)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 