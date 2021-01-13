'use strict';
const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res, next) => {
  console.log("Hello");
  // Google Chart API へ引き渡すデータ
  let data = '{"result":true, "count":42}';
  console.log(typeof data);
  console.log({ loadavg: os.loadavg() });
  //return res.json(data);
  res.json(data);
});

module.exports = router;