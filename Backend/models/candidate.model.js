const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CandidateSchema = new schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    department: {
        type: String,
        required: true,
        minlength: 3
    },
    position: {
        type: String,
        required: true,
        minlength: 1
    },
    studentsId:{
        type:Array,
        required:false
    }
   
}, {
    timestamps: true
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;

// image: {
//     data: Buffer,
//     contentType: String 
// }
