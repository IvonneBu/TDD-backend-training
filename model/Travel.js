const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    description:{
        type: String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    }
});

const TravelModel = mongoose.model("Travel",TravelSchema);

module.exports = TravelModel;