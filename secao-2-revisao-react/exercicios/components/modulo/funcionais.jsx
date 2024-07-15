export function Comp1() {
    return <h2>Comp #01</h2>
}

export const Comp2 = function() {
    return <h2>Comp #02</h2>
}

// O que você exportar como default não precisa ser nomeado.
// Apenas um componente pode ser exportado como default por arquivo.
export default function () {
    return (
        <div>
            <h2>Comp #03 - Função anônima</h2>
        </div>
    )
}

export const Comp4 = () => <h2>Comp #04 - Arrow function</h2>

const Comp5 = () => {
    return <h2>Comp #05</h2>
}

const Comp6 = props => {
    return (
        <div>
            <h2>Comp #06 - { props.msg }</h2>
        </div>
    )
}

// Podemos também, de modo separado, exportar múltiplos componentes.
export {
    Comp5, Comp6
}