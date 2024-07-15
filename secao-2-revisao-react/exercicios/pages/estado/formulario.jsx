import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("inicial") // Passar undefined para componentes não controlados

    return (
        <div>
            <h1>Componente Controlado</h1>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
        </div>
    )
}