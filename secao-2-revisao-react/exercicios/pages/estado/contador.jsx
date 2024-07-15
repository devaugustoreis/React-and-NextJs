import NumeroDisplay from "@/components/NumeroDisplay"
import { useState } from "react"

export default function contador() {
    // REACT HOOKS
    const [value, setValue] = useState(0)

    // MINHA PRIMEIRA SOLUCAO
    function alterValue(param) {
        let v = value

        if (param == "+") v++
        else v--

        setValue(v)
    }

    // ALTERNATIVA COM ARROW FUNCTIONS
    const dec = () => setValue(value - 1)
    const inc = () => setValue(value + 1)
    
    const estilo = {
        minWidth: "20px",
        marginRight: "10px"
    }

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {value}</div>
            <NumeroDisplay numero={value} />
            {
            /* <button style={estilo} onClick={() => alterValue("-")}>-</button>
            <button style={estilo} onClick={() => alterValue("+")}>+</button> */
            }
            <button style={estilo} onClick={dec}>-</button>
            <button style={estilo} onClick={inc}>+</button>
        </div>
    )
}