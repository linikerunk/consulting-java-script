const bodyParser = require('body-parser');
const express = require('express');
const app = express()

app.use(express.static('.'))// aplicado por qualquer requisiçao que será feita no servidor..
app.use(bodyParser.urlencoded({extended: true}))// aqui trata o submit de uma formulario e transforma em objeto
app.use(bodyParser.json()) // Aqui é o código que aplica para transformar o json em objeto

app.get('/teste', (req, res) => res.send(new Date)) // função middleware quando for requisitado uma funçao get

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./upload")
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})


app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body 
    // req.query
    // req.params  /parOuImpar:numeros
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })

})

app.listen(8080, () => console.log('Executando....'))