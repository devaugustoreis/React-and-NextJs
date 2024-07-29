import PortaModel from "../model/porta"
import Presente from "./Presente"
import styles from "../styles/Porta.module.css"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => { 
        e.stopPropagation() // Impedir a macaneta de herdar o evento de clique na porta
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{ porta.numero }</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.batente} ${selecionada}`}>
                { porta.fechada ? 
                    renderizarPorta() : 
                    porta.temPresente ? <Presente /> : false }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}