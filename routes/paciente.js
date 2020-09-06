const express = require("express")
const router = express.Router()


//Paciente pagina inicial
router.get("/", (req, res) => {
    
    res.render("paciente/index")
                
})

router.get("/formulario", (req, res) => {
    
    res.render("paciente/formulario/index")
                
})


module.exports = router
 