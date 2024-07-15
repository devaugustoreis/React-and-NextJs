import Filho from "./Filho";

export default function Pai(props) {

    function receiveData(param1, param2) {
        console.log(param1, param2)
    }

    return (
        <div>
            <Filho funcao={receiveData}/>
        </div>
    )
}