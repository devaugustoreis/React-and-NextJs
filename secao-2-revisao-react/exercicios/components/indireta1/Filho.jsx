export default function Filho(props) {
    console.log(props.funcao)

    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Mandar dados pro pai</button>
            <button onClick={
                () => props.funcao("Enviando mensagem ao pai.", 20)
            }>
                Mandar dados pro pai 2
            </button>
        </div>
    )
}