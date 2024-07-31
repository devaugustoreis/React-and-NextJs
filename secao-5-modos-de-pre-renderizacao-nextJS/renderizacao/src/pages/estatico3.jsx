// Método executado somente do lado do servidor.
export function getStaticProps() {
    return {
        revalidate: 7, // Next irá buscar/gerar o novo conteúdo a cada 7 segundos.
        props: {
            numero: Math.random()
        }
    }
}

// No build o valor de número será sempre o mesmo.
export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}