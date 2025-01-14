const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5500;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Replace with your MySQL username
    password: "sam29@sql", // Replace with your MySQL password
    database: "userdb",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Database.");
});

// Route to handle form submission
app.post("/register", (req, res) => {
    const { email, password } = req.body;

    // Server-side validation
    if (!email || !password || password.length < 6) {
        return res.send("Invalid input. Please try again.");
    }

    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        console.log("User record inserted.");
        res.send("Registration successful!");;
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
