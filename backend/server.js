const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
cons toprt = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
