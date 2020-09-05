const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")


router.get("/", (req, res) => {
    
    res.render("entrar/index")
                
})

router.get("/sair", (req, res) => {
                  
})


router.post("/entrar", (req, res) => {

    const login = {           
        email    : req.body.email ,    
        senha    : req.body.senha  
    }


    Usuario.find( {email: login.email, senha: login.senha} ).then((result) => {

        var valida_login = result.length  //Pegando o tamanho para saber se o email existe. Se o valor for = o e pq a lista esta vazia e o emial não existe

        if(valida_login == 0) {   

            console.log("Usuário e/ou senha inválidos")

            res.redirect("/login")
            
        } else {

            console.log("Usuário logado com sucesso ")

            // Atualizando a data do ultimo login do usuarioIn
            Usuario.updateOne( {"_id": result[0]._id},{ $set: { logado: true } } ).then(() => {
                console.log("Sucesso ao atualizar campo logado no entrar")
            }).catch((err) => {
                console.log("Erro ao atualizar campo logado no entrar " + err)
            })


            if(result[0].perfil == 1) {
               res.redirect("/colaborador")
            }
                
            if(result[0].perfil == 2) {
                res.redirect("/paciente")
            }
        }

    }).catch((err) => {
        console.log("Erro ao buscar usuário " + err)

        res.redirect("/login")
    })   

})

module.exports = router
