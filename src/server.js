// SERVIDOR
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, pageSuccessRegister, successRedirectFilter, saveClasses} = require('./pages')

//Configurar nunjucks (template engines)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Receber os dados do req.body
.use(express.urlencoded({extended: true}))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success-register", pageSuccessRegister)
.get("/success-filter", successRedirectFilter)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500)