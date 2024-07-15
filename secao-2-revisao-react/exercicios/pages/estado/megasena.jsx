import { useEffect, useState } from "react"
import { mega } from "@/functions/mega"
import NumeroDisplay from "@/components/NumeroDisplay"

export default function megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderNumeros() {
        return numeros.map(
            n => <NumeroDisplay key={n} numero={n} />
        )
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                { renderNumeros() }
            </div>
            <div>
                <input type="number" min={6} max={18} value={qtde} onChange={e => setQtde(e.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}