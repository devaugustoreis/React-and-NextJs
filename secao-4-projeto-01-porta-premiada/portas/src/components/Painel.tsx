import styles from "@/src/styles/Painel.module.css"

interface PainelProps {
    bgColor?: string
    children?: any
}

export default function Painel(props: PainelProps) {
    return (
        <div className={styles.painel}
            style={{
                backgroundColor: props.bgColor ?? "#fff"
            }}>
            { props.children }
        </div>
    )
}