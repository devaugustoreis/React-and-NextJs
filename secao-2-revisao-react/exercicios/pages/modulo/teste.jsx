// Poderia usar qualquer outro nome no lugar de "Default".
import Default, { Comp1 as Blabla, Comp2, Comp4, Comp5, Comp6 } from "../../components/modulo/funcionais"

export default function teste() {
    return (
        <div>
            <Blabla />
            <Comp2 />
            <Default />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Mensagem recebida por props" />
        </div>
    )
}