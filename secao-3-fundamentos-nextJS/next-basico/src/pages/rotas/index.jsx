import Link from 'next/link'
import router from 'next/router'

export default function rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                nome: "Pedro",
                idade: "35"
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?nome=Pedro&idade=35" passHref>
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
                    <li>Buscar</li>
                </Link>
                {/* O passHref é necessário quando não existe uma tag "a" no link */}
                <Link href="/rotas/456/Augustinho">
                    <a href="">
                        <li>Augustinho</li>
                    </a>
                </Link>
            </ul>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/456/Augustinho")}>Augustinho</button>
            </div>
        </div>
    )
}