const express = require("express")
const router = express.Router()


//Criar conta
router.get("/", (req, res) => {
    
    res.render("pagina_inicial/index")
                
})


module.exports = router
