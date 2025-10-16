const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());



app.get('/me', async (req, res) => {
  try {
    
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    const catFact = response.data.fact;

    
    const timestamp = new Date().toISOString();

    
    const profile = {
      status: "success",
      user: {
        email: "ajibbola007@gmail.com",
        name: "Ajibola Abolade",
        stack: "Node.js/Express"
      },
      timestamp: timestamp,
      fact: catFact
    };

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later."
    });
  }
});

const PORT = process.env.PORT || 8080;
console.log("🔍 process.env.PORT =", process.env.PORT); 


app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});