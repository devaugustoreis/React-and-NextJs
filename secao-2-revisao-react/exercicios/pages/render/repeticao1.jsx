export default function Repeticao1() {
    const listaAprovados = [
        "Augusto",
        "Amanda",
        "Camily",
        "Lucas",
        "Rafael",
        "Pedro",
        "Kaua",
        "Debora",
        "Ana"
    ]

    function renderizarLista() {
        return listaAprovados.map((aluno, i) => <li key={i}>{ aluno }</li>)
    }

    return (
        <ul>
            { renderizarLista() }
        </ul>
    )
}


// ===================== MÉTODO MANUAL =====================
// function renderizarLista() {
//     const itens = []

//     for(let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{ listaAprovados[i] }</li>)
//     }

//     return (
//         <>
//             { itens }
//         </>
//     )
// }