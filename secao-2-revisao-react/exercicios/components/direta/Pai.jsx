import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Augusto" familia={props.familia} />
            <Filho nome="Caroline" familia={props.familia} />
            <Filho {...props} nome="Outro" />
        </div>
    )
}

// Operador Spread passará todas as propriedades do pai para o filho.
// O ideal é que seja usado no começo para que propriedades do pai (com o mesmo nome) não sobrescrevam propriedades do filho de modo indesejado.