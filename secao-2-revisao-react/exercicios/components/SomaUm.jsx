export default function SomaUm(props) {
    // props.numero++    // Não é possível fazer isto, pois props são somente para leitura.

    return (
        <div>
            <h1>{props.numero}</h1>
            <h1>{props.numero + 1}</h1> {/* Tudo bem fazer isto, pois o valor do prop não foi alterado. */}
        </div>
    )
}