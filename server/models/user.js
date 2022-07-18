const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({  
    name: {
        type: String,
    },
    password: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    isPortfolioMade: {type: Boolean, default: false},
    phone1: {type: String},
    phone2: {type: String},
    location: {
        city: {type: String},
        state: {type: String},
        country: {type: String}
    },
    gender: {
        type: String, 
        enum:["Female", "Male", "Non-Binary", "Transgender", "Intersex", "I prefer not to say"],
    },
    age: {
        type: String
    },
    employmentStatus: {
        type: String, 
        enum:["Full-Time", "Part-Time", "Unemployed", "Self-Employed", "Homemaker", "Student", "Retired"]
    },
    titles: [{type: String}],
    currentRole: {type: String},
    currentWorking: {type: String},
    skills: [{type: String}],
    education: [{
        years: String,
        education: String,
        university: String
    }],
    education: [{
        years: String,
        role: String,
        work: String
    }],
    achievements: [{
        title: String
    }],
    additionalInformation: [{
        title: String,
        url: String,
        description: String,
    }],
    profileImage: {
        url: String,
        filename: String
    },
    photographs: [{
        url: String,
        filename: String
    }],
    shortDescription: {type: String},
    profileUrl: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    resetPasswordCount: {
        type: Number,
        default: 0
    },
    countExpires: Date,
});


const User = mongoose.model("User", userSchema);

module.exports = User;