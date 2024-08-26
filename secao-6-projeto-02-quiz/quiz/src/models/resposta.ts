export default class RespostaModel {
    #valor: string                    // # -> private
    #certa: boolean
    #revelada: boolean

    constructor(
        valor: string,
        certa: boolean,
        revelada: boolean = false
    ) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true)
    }
    
    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    static criarUsandoObjeto(objeto: RespostaModel): RespostaModel {
        return new RespostaModel(objeto.valor, objeto.certa, objeto.revelada)
    }

    transformarEmObjeto() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }

}