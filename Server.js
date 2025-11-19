const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/earnkaro", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    method: String,
    createdAt: String
});

const User = mongoose.model("User", UserSchema);

// SIGNUP / LOGIN API
app.post("/login", async (req, res) => {
    const { name, email, password, method } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
        // Create account
        user = await User.create({
            name: name || "User",
            email,
            password: method === "google" ? null : password,
            method,
            createdAt: new Date().toLocaleString()
        });

        return res.json({ success: true, newUser: true, user });
    }

    // Google Login
    if (user.method === "google") {
        return res.json({ success: true, user });
    }

    // Password Check
    if (user.password === password) {
        return res.json({ success: true, user });
    }

    return res.json({ success: false, message: "Incorrect password!" });
});

// Server
app.listen(5000, () => console.log("Server running on port 5000"));
