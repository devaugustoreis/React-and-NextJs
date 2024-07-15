export default function SomentePar(props) {
    const numeroPar = props.numero % 2 === 0
    // return numeroPar ? <h1>{props.numero}</h1> : null

    return (
        <div>
            {numeroPar ?
                <h1>{props.numero}</h1> :
                null
            }
        </div>
    )
    
    // if (props.numero % 2 === 0) {
    //     return <h1>{props.numero}</h1>
    // } else {
    //     return null 
    // }
}