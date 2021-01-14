'use strict';
const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res, next) => {
  console.log("Hello");
  // Google Chart API へ引き渡すデータ
  let data = [100, -50, 200, 150, 200, 400, 1000];

  //return res.json(data);
  res.json(data);
});

module.exports = router;