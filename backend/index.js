const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secretKey";
app.get("/", (req, res) => {
    res.json({
        message: "a sample message API"
    })
})

app.get("/login", (req, res) => {
    const user = {
        id: 1,
        username: "vivek",
        email: "abc@test.com"
    }
   
    })
    app.post("/profile", verifyToken, (req, res) => {
        jwt.verify(req.token, secretKey, (err, authData) => {
            if (err) {
                res.send({ result: "invalid token" })
            } else {
                res.json({
                    message: "profile accessed",
                    authData
                })
            }
        })
    function verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        console.log('bearerHeader', bearerHeader)
        if (typeof bearerHeader !== 'undefined') {
            const token = bearerHeader.split(" ")[1];
            req.token = token;
            next();
        } else {
            res.send({
                result: 'token is not valid'
            })
        }
    }
    jwt.sign({ user }, secretKey,(err, token) => {
        res.json({
            token
        })
    })
})



app.listen(5000, () => {
    console.log("app running on 5000 port");
})