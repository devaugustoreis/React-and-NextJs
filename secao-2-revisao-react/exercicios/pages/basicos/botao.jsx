function acao1() {
    console.log("Ação 1")
}

export default function botao() {

    function acao2() {
        console.log("Ação 2")
    }

    function acao5(e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Ação 1</button>
            <button onClick={acao2}>Ação 2</button>
            <button onClick={function() {
                console.log("Ação 3")
            }}>Ação 3</button>
            <button onClick={() => console.log("Ação 4")}>
                Ação 4
            </button>
            <button onClick={acao5}>Ação 5</button>
            <button onClick={e => acao5(e.altKey)}>Ação 5 v2</button>
            
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}