// Carregando modulos
const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require('mongoose')
const colaborador = require("./routes/colaborador")
const paciente = require("./routes/paciente")
const criar_conta = require("./routes/criar_conta")
const login = require("./routes/login")
const pagina_inicial = require("./routes/pagina_inicial")


// Configuracoes
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongoose
        mongoose.Promise = global.Promise; 
        mongoose.connect("mongodb://localhost/cadastro").then(() => {
            console.log("Conectado ao mongo")
        }).catch((err) => {
            console.log("Erro ao se conectar no mongo: " + err)
        })
    // Public
        app.use(express.static(path.join(__dirname,"public")))

//Rotas
    app.use("/", pagina_inicial)
    app.use("/colaborador", colaborador)
    app.use("/paciente", paciente)
    app.use("/criar_conta", criar_conta)
    app.use("/login", login)


//Subindo servidor
const PORT = 8001
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT)
})
