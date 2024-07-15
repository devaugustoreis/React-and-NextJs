import { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0,  // Operador ?? nos permite passar um valor "default" (padrão). 
        passo: this.props.passo ?? 1
    }

    // OPÇÃO 1
    // inc() {
    //     this.setState({
    //         numero: this.state.numero + 1
    //     })
    // }

    // OPÇÃO 2
    // No contexto de uma arrow function, o this sempre vai apontar para o objeto atual.
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    // Poderia usar também esta função em vez de chamar o setState direto no onChange
    alterarPasso = (ev) => {
        this.setState({
            passo: +ev.target.value 
        })
    }

    renderForm() {
        return (
            <>
                <input type="number" min={1} max={100} 
                    value={this.state.passo} 
                    onChange={ev => this.setState({ passo: +ev.target.value })} />
                    {/* + Foi adicionado para transformar o valor do input em number */}

                {/* OPÇÃO 1
                <button onClick={() => this.inc()}>+</button> 
                */}

                {/* OPÇÃO 2 */}
                <button onClick={this.dec}>-</button> 
                <button onClick={this.inc}>+</button> 
            </>
        )
    }


    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.props.valorInicial}</h2>
                <h4>{this.state.numero}</h4>
                { this.renderForm() }
            </div>
        )
    }
}