import styles from "./integracao2.module.css"

export default function integracao() {
    return (
        <div id={ styles.integracao2 }>
            <div className={ styles.red }>Texto #01</div>
            <div className={ styles.blue }>Texto #02</div>
            <div className={ styles.white }>Texto #03</div>
        </div>
    )
}