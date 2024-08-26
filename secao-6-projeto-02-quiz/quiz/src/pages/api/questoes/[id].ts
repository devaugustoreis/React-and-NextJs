import questoes from "@/pages/api/bancoDeQuestoes"
import { NextApiRequest, NextApiResponse } from "next"

export default function questoesPorId(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    const idSelecionado = +req.query.id!

    const listaQuestoes = questoes.filter(questao => questao.id === idSelecionado)

    if (listaQuestoes.length === 1) {
        const questaoSelecionada = listaQuestoes[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.transformarEmObjeto())
    } else {
        res.status(204).end()
    }

}