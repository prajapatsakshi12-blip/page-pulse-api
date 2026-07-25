const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const cache = new Map();

app.post("/api/audit", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  if (cache.has(url)) {
    return res.json({
      cached: true,
      data: cache.get(url)
    });
  }

  try {
    const response = await axios.get(url, { timeout: 5000 });

    const result = {
      url,
      status: response.status,
      reachable: true
    };

    cache.set(url, result);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      url,
      reachable: false,
      error: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("Page Pulse API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});