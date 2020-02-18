import React from 'react' // Quase sempre irá importar o react usando JSX

export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1> // default significa que vou colocar uma função anonima

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default { BoaTarde, BoaNoite }