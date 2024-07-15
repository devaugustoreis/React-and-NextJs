export default function Estilo(props) {
    const estilos = {
        backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
        color: props.color,
        textAlign: props.direita ? "right" : "left"
    }

    const classeAplicada = props.numero >= 0 ? "classe1" : "classe2"

    return (
        // <div>
        //     <h1 style={{
        //         backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
        //         color: props.color,
        //         textAlign: props.direita ? "right" : "left"
        //     }}>
        //         Texto
        //     </h1>
        // </div>

        // Podemos fazer como acima ou encapsular em um objeto.
        // A desvantagem de fazer com um objeto por fora, é que a IDE não conseguirá inferir que trata-se de css e o auto-complete não funcionará.
        <div>
            <h1 style={estilos}>
                Texto 1
            </h1>

            <h2 className={classeAplicada}>Texto 2</h2>
            <h2 className={ props.numero >= 0 ? "classe1" : "classe2" }>Texto 3</h2>
        </div>
    )
}