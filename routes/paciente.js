const express = require("express")
const router = express.Router()


//Paciente pagina inicial
router.get("/", (req, res) => {
    
    res.render("paciente/index")
                
})

router.get("/formulario", (req, res) => {
    
    res.render("paciente/formulario/index")
                
})

router.get("/evolucao", (req, res) => {
    
    res.render("paciente/evolucao/index")
                
})

// router.get("/atendimento", (req, res) => {
    
//     res.render("paciente/atendimento/index")
                
// })


module.exports = router
 