const express = require('express');
const router = new express.Router();

router.get('/example', async function (req, res) {
    const data = {
        name: "data",
        description: "this is some data."
    }
    res.json(data);
    console.log("Accessed API Example Page, <accessed '/api/example'>");
})

module.exports = router;