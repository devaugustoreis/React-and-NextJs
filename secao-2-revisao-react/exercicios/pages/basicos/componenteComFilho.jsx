import Item from "@/components/Item";
import Lista from "@/components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="item 1"/>
                <Item conteudo="item 2"/>
                <Item conteudo="item 3"/>
            </Lista>
        </div>
    )
}