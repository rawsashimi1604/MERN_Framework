const express = require('express');
const router = new express.Router();
const axios = require('axios');

router.get('/', async function (req, res) {
    res.render("../views/home.ejs")
    console.log("Accessed Home Page, <accessed '/'>");
})

router.get('/example', async function (req, res) {
    axios.get("http://localhost:3000/api/example").then(resp => {
        res.render("../views/example.ejs", {
            data: resp.data
        });
        console.log("Accessed Example Page, <accessed '/example'>");
    })
})

module.exports = router;