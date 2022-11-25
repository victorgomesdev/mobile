const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Ocorrencia = require('./model')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/create', async (req, res) => {
    await Ocorrencia.create({
        "nome": req.body.nome,
        "descricao": req.body.desc,
        "rua": req.body.rua,
        "num": req.body.num,
        "bairro": req.body.bairro,
        "email": req.body.email,
        "createdAt": new Date(),
        "updatedAt": new Date(),
        "id_status": "1"
    })
    res.send(JSON.stringify("Solicitação enviada com sucesso!"))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('O SERVIDOR ESTÁ RODANDO.')
})