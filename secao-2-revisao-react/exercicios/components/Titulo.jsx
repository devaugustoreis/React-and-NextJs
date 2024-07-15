export default function Titulo(props) {
    console.log(props)

    // if (props.small) {
    //     return (
    //         <>
    //             <p>{props.title}</p>
    //             <p>{props.subtitle}</p>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h1>{props.title}</h1>
    //             <h2>{props.subtitle}</h2>
    //         </>
    //     )
    // }

    // PODEMOS SIMPLIFICAR O CÓDIGO ACIMA COM O OPERADOR TERNÁRIO
    return props.small ? (
        <>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
        </>
    ) : (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </>
    )
}