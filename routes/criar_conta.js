const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")


//Criar conta
router.get("/", (req, res) => {
    
    res.render("criar_conta/index")
                
})

// Salvar Conta
router.post("/salvar", (req, res) => {

    var perfil = req.body.perfil
    var cod_perfil = 0

    if(perfil == "colaborador") {
        cod_perfil = 1
    }
    if(perfil == "paciente") {
        cod_perfil = 2
    }
    
    const novoUsuario = {        
        nome     : req.body.nome  ,    
        email    : req.body.email ,    
        senha    : req.body.senha ,
        perfil   : cod_perfil
    }
    
    Usuario.find( {email: novoUsuario.email} ).then((result) => {

        var valida_email = result.length  //Pegando o tamanho para saber se o email existe. Se o valor for = o e pq a lista esta vazia e o emial não existe

        if(valida_email == 0) {
            
            new Usuario(novoUsuario).save().then( usuario_criado => {
                console.log("Usuário criado com sucesso! ")

                if(perfil == "colaborador") {
                    res.redirect("/colaborador")
                }
                
                if(perfil == "paciente") {
                    res.redirect("/paciente")
                }
               
                
            }).catch((err) => {
                console.log("Erro ao salvar usuário" + err)
                res.redirect("/criar_conta")
            })

        } else {

            console.log("Email existe! ")
            res.redirect("/criar_conta")
        }

    }).catch((err) => {
        console.log("Erro ao buscar usuário " + err)
        res.redirect("/criar_conta")
    })
   
})

module.exports = router
