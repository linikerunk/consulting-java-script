const express = require('express')
const app = express()


app.use((req, res, next) => {
    console.log("Antes...")
    next()
})

app.use('/opa', (req, res, next) => {
    console.log("Durante!...")
    res.json({
        data: [
            { id: 7, name: "Ana", position: 1 },
            { id: 34, name: "Bia", position: 2 },
            { id: 73, name: "Carlos", position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    //Retorna um objeto de Array ..
    // res.json([
    //     { id: 7, name: "Ana", position: 1 },
    //     { id: 34, name: "Bia", position: 2 },
    //     { id: 73, name: "Carlos", position: 3 }
    // ])

    //Retorna um HTML via get
    // res.send("Estou <b>bem !</b> <h1>TESTE</h1>")


    // Retorna um Json 
    // res.json({
    //     name: 'IPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })
    next()

})

app.use((req, res) => {
    console.log("Depois...")
})


app.listen(3000, () => {
    console.log("Backend Executando 2...")
})
