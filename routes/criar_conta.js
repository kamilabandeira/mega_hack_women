const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")


//Criar conta
router.get("/", (req, res) => {
    
    res.render("criar_conta/index")
                
})

// Salvar Conta
router.post("/salvar", (req, res) => {
    var email = req.body.email
    var senha = req.body.senha 
    var nome = req.body.nome 
   
})

module.exports = router