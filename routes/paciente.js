const express = require("express")
const router = express.Router()


//Criar conta
router.get("/", (req, res) => {
    
    res.render("paciente/index")
                
})


module.exports = router
 