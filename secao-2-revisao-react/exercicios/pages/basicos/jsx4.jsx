export default function jsx4() {
    const subtitle = "Estou no JavaScript!"
    const trechoH6 = <h6>Um pouco confuso, mas funciona</h6>
    
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{ subtitle }</h2>
            <h3>{ 5 * 5 }</h3>
            <h4>{Math.max(12, 15)}</h4>
            <h5>{between(15, 30, 40)}</h5>
            {trechoH6}
        </div>
    )
}

function between(value, min, max) {
    if (value > min && value < max) {
        return "Sim"
    } else {
        return "Não"
    }
}