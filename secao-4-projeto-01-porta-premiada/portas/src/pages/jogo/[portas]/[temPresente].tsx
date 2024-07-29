import styles from "@/src/styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "@/src/components/Porta"
import { atualizarPortas, criarPortas } from "@/src/functions/portas"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Jogo() {
    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    
    useEffect(() => {
        const portas: number = +router.query.portas // Alternativa para converter em número.
        const portaComPresente: number = +router.query.temPresente // Alternativa para converter em número.

        const qtdePortasValida = portas >= 3 && portas <= 100
        const portaComPresenteValida = portaComPresente >= 3 && portaComPresente <= portas

        setValido(qtdePortasValida && portaComPresenteValida)
    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
        const portas: number = parseInt(router.query.portas as string)
        const portaComPresente: number = parseInt(router.query.temPresente as string)
        
        setPortas(criarPortas(portas, portaComPresente))
    }, [router.query])


    function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
      })
    }


    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                { valido ? 
                    renderizarPortas() : 
                    <h2>Parâmetros inválidos!</h2>    
                } 
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}