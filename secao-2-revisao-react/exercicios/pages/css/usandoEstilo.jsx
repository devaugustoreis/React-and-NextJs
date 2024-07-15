import Estilo from "@/components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="#111" />
            <Estilo numero={-2} color="#fff" direita />
        </div>
    )
}