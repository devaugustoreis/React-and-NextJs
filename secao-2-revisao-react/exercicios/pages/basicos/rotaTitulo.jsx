import Titulo from '../../components/Titulo'

export default function rotaTitulo() {
    return (
        <div>
            <Titulo 
                title="Página de Cadastro"
                subtitle="Incluir, alterar e excluir coisas!"    
            />
            <Titulo
                title="Página de Login"
                subtitle="Informe o seu e-mail e senha"
                small={true}
            />
            <Titulo
                title="Outra página"
                subtitle="Outro subtítulo"
                small // O mesmo que passar true
            />
        </div>
    )
}