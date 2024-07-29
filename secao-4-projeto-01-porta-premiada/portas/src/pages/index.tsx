import styles from "@/src/styles/Formulario.module.css"
import Painel from "../components/Painel";
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [portaComPresente, setPortaComPresente] = useState(1)

    return (
        <div className={styles.formulario}>

            <div>
                <Painel bgColor="#c0392c">
                    <h1>Monty Hall</h1>
                </Painel>
                <Painel>
                    <EntradaNumerica 
                        text = "Qtde Portas?" 
                        value = {qtdePortas}
                        onChange = { novaQtde => setQtdePortas(novaQtde) } />
                </Painel>
            </div>

            <div>
                <Painel>
                    <EntradaNumerica 
                        text = "Porta com presente?" 
                        value = {portaComPresente}
                        onChange = { numeroPorta => setPortaComPresente(numeroPorta) } />
                </Painel>
                <Painel bgColor="#28a085">
                    <Link href={`/jogo/${qtdePortas}/${portaComPresente}`} className={ styles.link } passHref>
                        <h2>Iniciar</h2>
                    </Link>
                </Painel>
            </div>

        </div>
    )
}
