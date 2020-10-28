const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

const buildPath = path.join(__dirname, '..', 'build');
const teamsRoutes = require('./routes/teamsRoutes');

// middlewares
app.use(cors());
app.use(express.static(buildPath));

app.use('/api/teams', teamsRoutes);

// requests
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
