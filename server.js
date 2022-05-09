const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMySecretRoutes = require("./server/routes/secret.routes");
AllMySecretRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));