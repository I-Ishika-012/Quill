const mongoose = require("mongoose");

//! user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        trialActive: {
            type: Boolean,
            default: true,
        },
        trialExpires: {
            type: Date,
        },
        subscription: {
            type: String,
            enum: ['Trial','Free', 'Basic', 'Premium'],
        },
        apiRequestCount: {
            type: Number,
            default: 0,
        },
        monthlyRequestCount: {
            type: Number,
            default: 0,
        },
        nextBillingDate: Date,
        payments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Payment",
            }
        ],
        history: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "History",
            }
        ],
    },
    //? property for time stamps in mongoose - created at and updated at
    { timestamps: true }
);

//! export model
module.exports = mongoose.model("User", userSchema);