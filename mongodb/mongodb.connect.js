const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://user_mongo_tdd:MWTZswHBoOEU9A0N@cluster0.lm0y3.mongodb.net/todo-tdd?retryWrites=true&w=majority");
        
    } catch (error) {
        console.log("Error connecting to mongodb");
        console.log(error);
    }
}

module.exports = { connect };