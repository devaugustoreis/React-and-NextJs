// Método executado somente do lado do servidor.
export async function getServerSideProps() {
    console.log("[Server] Gerando props para o componente...") // Este console.log não aparece no navegador, somente no terminal
    const resp = await fetch('http://localhost:3000/api/produtos') // Tomar cuidado, a API precisa existir durante o build. Logo, o server de desenvolvimento precisa estar rodando.
    const produtos = await resp.json()

    return {
        props: {
            produtos
        }
    }
}

export default function Dinamico2(props) {
    console.log("[Cliente] renderizando o componente...")
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.nome} - R$ {produto.preco}
                </li>
            )   
        })
    }

    return (
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
                { renderizarProdutos() }
            </ul>
        </div>
    )
}