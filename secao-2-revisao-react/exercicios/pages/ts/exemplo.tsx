import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Augusto" idade={29} />
            <Pessoa nome="Maria" />
        </div>
    )
}