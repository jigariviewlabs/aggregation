// const mongoose = require('mongoose');
// // defining schema
// const univercitySchema = new mongoose.Schema({



//     country: { type: String, required: false, trim: true },
//     city: { type: String, required: false, trim: true },
//     name: { type: String, required: false, trim: true },
//     location: { 
//        'type':'Point',
//        'coordinates': Array, 
//         required: false, 
//         trim: true 
//     },
//     students:[{ 
//         'year':Number,
//         'number':Number
//     }]


// })
// //model 
// const UnivercityModel = mongoose.model("univercity_models", univercitySchema)
// module.exports = UnivercityModel; 
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const studentSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
});

const universitySchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: locationSchema,
        required: true
    },
    students: {
        type: [studentSchema],
        required: true
    }
});

const UnivercityModel = mongoose.model('University', universitySchema);

module.exports = UnivercityModel;
