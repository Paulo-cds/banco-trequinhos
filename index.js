const express = require('express')
const cors = require ('cors')


const db = require('./src/database/db')
const routes = require('./src/routes/routes')

const app = express()

//conexao com o banco de dados
db.connect()

//habilita CORS
app.use(cors({
    origin:'https://trequinhos.vercel.app/'
}))
/*Quando quiser especificar o endereço que pode consultar a api
app.use(cors({
    origin:'endereço'
})) */


//habilita server para receber dados json
app.use(express.json())


//rotas
app.use('/api', routes)




//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))