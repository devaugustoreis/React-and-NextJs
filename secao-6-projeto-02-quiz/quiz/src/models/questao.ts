import { embaralhar } from "@/functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number                    // # -> private
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean
    // #respondida!: boolean

    constructor(
        id: number,
        enunciado: string,
        respostas: RespostaModel[],
        acertou: boolean = false
    ) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get naoRespondida() {
        return !this.respondida
    }

    get respondida() {
        for (let resposta of this.#respostas) {
            if (resposta.revelada) return true
        }

        return false 
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })

        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    static criarUsandoObjeto(objeto: QuestaoModel): QuestaoModel {
        const respostas = objeto.respostas.map(resposta => RespostaModel.criarUsandoObjeto(resposta))
        return new QuestaoModel(objeto.id, objeto.enunciado, respostas, objeto.acertou)
    }

    transformarEmObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resposta => resposta.transformarEmObjeto())
        }
    }

}