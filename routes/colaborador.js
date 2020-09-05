const express = require("express")
const router = express.Router()


//Criar conta
router.get("/", (req, res) => {
    
    res.render("colaborador/index")
                
})


module.exports = router
 