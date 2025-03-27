const express = require("express");
const encryptTransaction = require("./encryption");

const app = express();
app.use(express.json());

app.post("/api/encrypt-transaction", (req, res) => {
    const encrypted = encryptTransaction(req.body);
    res.json(encrypted);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));