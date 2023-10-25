const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    matricule: {
        type: String,
    },

    email:{
        type:String,
    }

}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified()) return next();
    this.password = await bcrypt.hash(this.password, 12)
})
