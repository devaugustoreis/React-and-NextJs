// export function getStaticPaths() {
//     return {
//         fallback: false, // retornará 404 - Not Found caso id não esteja nos paths
//         paths: [
//             { params: { id: "1" } },
//             { params: { id: "2" } },
//             { params: { id: "1995" } },
//         ]
//     }
// }

export async function getStaticPaths() {
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids = await resp.json()   

    const paths = ids.map(id => {
        return { params: { id: `${id}` } }
    })

    return {
        fallback: false, // retornará 404 - Not Found caso id não esteja nos paths
        // fallback: true, // Tentará renderizar a página.
        paths
    }
}

export async function getStaticProps(context) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json()        

    return {
        props: {
            aluno
        }
    }
}

export default function AlunoById(props) {
    const { aluno } = props

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}