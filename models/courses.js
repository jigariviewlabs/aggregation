const mongoose = require('mongoose');
// defining schema
const courseSchema = new mongoose.Schema({



    university: { type: String, required: false, trim: true },
    name: { type: String, required: false, trim: true },
    level: { type: String, required: false, trim: true }
    

})
//model 
const CoursesModel = mongoose.model("Courses", courseSchema)
module.exports = CoursesModel; 