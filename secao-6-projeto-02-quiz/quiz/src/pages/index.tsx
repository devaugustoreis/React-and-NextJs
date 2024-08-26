import { Inter } from "next/font/google";
import QuestaoModel from "@/models/questao";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    setIdsQuestoes(idsQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const jsonQuestao = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(jsonQuestao)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsQuestoes()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {
    if (questao) {
      const proximoIndice = idsQuestoes.indexOf(questao.id) + 1
      return idsQuestoes[proximoIndice]
    }
  }

  function irParaProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irParaProximaQuestao(proximoId) : finalizar()
  }

  function irParaProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irParaProximoPasso={irParaProximoPasso}/> 
    ) : false
}
