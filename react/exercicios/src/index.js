import React, { Fragment, Component } from 'react' // Preciso do import do react para todos arquivos que geram JSX
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

import Multi from './componentes/Multiplos'  // posso usar o destructiring { BoaTarde, BoaNoite }
import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


const elemento = <h1> React 2</h1>

ReactDOM.render(<h1>React 1</h1>, document.getElementById('root'))
ReactDOM.render(elemento, document.getElementById('root')) // React DOM conversa com a DOM para colocar o html no javaScript
ReactDOM.render(<Primeiro />, document.getElementById('root'))
ReactDOM.render(<BomDia nome="Liniker" idade={25} />, document.getElementById('root')) // posso usar a sintaxe <BomDia></BomDia>


ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <Multi.BoaNoite nome="Claudia" />
    </div>, document.getElementById('root')
)

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Kleber" />
    </div>, document.getElementById('root')
)

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />

            {/*  Como passo os componentes filhos aqui? */}
        </Pai>

    </div>, document.getElementById("root")
)

// JSX o primeiro parametro   --> exemplo: $('<h1>).html('React 2')
