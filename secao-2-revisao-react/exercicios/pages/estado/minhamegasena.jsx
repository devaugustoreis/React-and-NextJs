import NumeroDisplay from "@/components/NumeroDisplay"
import { useState } from "react"

// Versão inteiramente desenvolvida por mim.
export default function megaSena() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const [quantidade, setQuantidade] = useState(1)
    const [numerosMega, setNumerosMega] = useState([])

    function gerarNumerosMegaSena() {
        let array = []

        for (let i = 0; i < quantidade; i++) {
            let number = Math.floor(Math.random() * 60 + 1)

            while (array.includes(number)) {
                number = Math.floor(Math.random() * 60 + 1)
            }

            array.push(number)
        }

        setNumerosMega(array)
    }

    function gerarDisplayNumeros() {
        return numerosMega.map((n, i) => {
            return (
                <NumeroDisplay key={i} numero={n}/>
            )
        })
    }

    return (
        <div style={estilo}>
            MegaSena
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                { gerarDisplayNumeros() }
            </div>
            <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} min={1} max={60} />
            <button onClick={e => gerarNumerosMegaSena()}>Gerar Números</button>
        </div>
    )
}