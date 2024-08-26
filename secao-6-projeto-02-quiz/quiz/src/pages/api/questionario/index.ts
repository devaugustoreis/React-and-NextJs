import questoes from "@/pages/api/bancoDeQuestoes"
import { embaralhar } from "@/functions/arrays"
import { NextApiRequest, NextApiResponse } from "next"

export default function questionario(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}