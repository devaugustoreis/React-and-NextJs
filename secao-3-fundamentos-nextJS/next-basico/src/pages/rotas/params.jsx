import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
    const router = useRouter()
    
    console.log(router)

    const nome = router.query.nome
    const idade = router.query.idade

    return (
        <div>
            <h1>Rotas Params: { nome } - { idade }</h1>
            <Link href="/rotas" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}