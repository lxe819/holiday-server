const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const countrySchema = new Schema(
    {
        title: { type: String }, 
    }
); 

const Country = mongoose.model("Country", countrySchema); 

module.exports = Country; 