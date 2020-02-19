import React from 'react' //{ Fragment }


export default props => [ // posso retornar dois elementos separados por virgulas dentro de um array
    <h1 key="h1"> Bom dia  {props.nome} !!</h1>,
    <h2 key="h2"> Até Breve !</h2>
]

// export default propos => // convensão usamos propos...
//     <React.Fragment>
//         <h1> Bom dia, {propos.nome}, sua idade é {propos.idade} !!</h1>
//         <h2>Até Breve!!</h2>
//     </React.Fragment> // Fragment server para retornar elementos JSX sem dificuldade alguma ...
//     // Se eu importar o { Fragment }, eu nao preciso passar na TAG o </React.Fragment>

// export default propos =>
//     <div>
//         <h1> Bom dia, {propos.nome}, sua idade é {propos.idade} !!</h1>
//         <h2>Até Breve!!</h2>
//     <div>
