import Layout from "@/components/template/Layout";
// import { AppConsumer } from "@/data/context/AppContext";    // OPCAO ALTERNATIVA
// import useAppData from "@/data/hook/useAppData";            // OPCAO MELHOR

export default function Notificacoes() {
  // const { alternarTema } = useAppData()                     // OPCAO MELHOR

  return (
    <Layout titulo="Notificações" subtitulo="Gerenciar suas notificações">
      {/* <AppConsumer>                                        // OPCAO ALTERNATIVA
        {dados => <h3>{dados.nome}</h3>}
      </AppConsumer> */}

      {/* <button onClick={alternarTema}>Alternar Tema</button> */}
    </Layout>
  )
}
