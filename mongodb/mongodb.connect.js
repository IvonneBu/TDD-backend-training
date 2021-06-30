const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "uri");
        
    } catch (error) {
        console.log("Error connecting to mongodb");
        console.log(error);
    }
}

module.exports = { connect };