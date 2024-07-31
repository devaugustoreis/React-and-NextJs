// Método executado somente do lado do servidor.
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

// No build o valor de número será sempre o mesmo.
export default function Estatico2(props) {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}