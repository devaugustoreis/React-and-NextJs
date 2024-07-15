import listaProdutos from "@/data/listaProdutos"

export default function repeticao2() {

    const blackBorder = {
        border: "1px solid black"
    }
    
    function renderizarLinhas() {
        return listaProdutos.map(produto => 
            <tr key={produto.id}>
                <td style={blackBorder}> { produto.id } </td>
                <td style={blackBorder}> { produto.nome } </td>
                <td style={blackBorder}> { produto.preco } </td>
            </tr>
        )
    }

    return (
        <div>
            <table style={blackBorder}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    { renderizarLinhas() }
                </tbody>
            </table>
        </div>
    )
}