// Seed database
const axios = require('axios');
const mongoose = require('mongoose');
const connectDB = require('../connect');
const MyObject = require("../../models/MyObject");
const {
    response
} = require('express');
require("dotenv").config();


const connect = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
    } catch (e) {
        console.log(e);
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function seedObject(object) {
    console.log(object);
    MyObject.create(object);
    sleep(200);
}

connect(process.env.MONGO_URI);
seedObject({
    name: "object1",
    description: "this is object 1"
});
process.exit();