const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3001;
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.use(express.static(publicPath));

app.get((req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/teams', async (req, res) => {
  const url = "https://api.football-data.org/v2/competitions/2001/teams";
  try {
    const { data } = await axios.get(url, {
      headers: {
        'X-Auth-Token': '83dbbf606d274eb085fa5569a0b436d1',
      },
    });

    if (data.errorCode === 429) {
      res.json(data.message)
    }
    else {
      res.json(data);
    }

  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

app.get('/teams/:teamId', async (req, res) => {
  const url = `https://api.football-data.org/v2/competitions/2001/teams/${req.params.teamId}`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        'X-Auth-Token': '83dbbf606d274eb085fa5569a0b436d1',
      },
    });

    if (data.errorCode === 429) {
      res.statusCode(429).json(data.message)
    }
    else {
      res.json(data);
    }

  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
