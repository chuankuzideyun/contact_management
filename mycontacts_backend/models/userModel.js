const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user's name"],
    },
    email: {
        type: String,
        required: [true, "Please add the user's email address"],
        unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        required: [true, "Please add the user password."],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Uer", userSchema);