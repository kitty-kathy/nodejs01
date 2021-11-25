var app = require("./config/server")

var rotaName = require("./app/route/home")
rotaName(app)

var rotaFormInclusaoLivro = require("./app/route/formulario_inclusao_livro")(app)

var rotaLivros = require("./app/route/livros")(app)

app.listen(3000, function(){
    console.log("Servidor rodando com Express na porta 3000")
})