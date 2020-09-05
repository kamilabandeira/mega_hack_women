const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

router.get("/", (req, res) => {
    
    res.render("entrar/index")
                
})

router.get("/sair",async (req, res) => {
    await bd.sair()

    res.redirect("/login")                
})


router.post("/entrar", (req, res) => {
    var email = req.body.email
    var senha = req.body.senha

})

module.exports = router
