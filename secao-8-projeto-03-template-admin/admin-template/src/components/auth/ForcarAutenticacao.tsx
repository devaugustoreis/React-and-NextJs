import Head from 'next/head'
import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import { useState } from 'react'
import Usuario from '@/model/Usuario'
import router from 'next/router'

export default function ForcarAutenticacao(props: any) {
    const [ carregando, setCarregando ] = useState(true)
    const [ usuario, setUsuario ] = useState(null)
    
    function renderizarConteudo() {
        return (
            <>
                {/* <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                                    window.location.href = "/autenticacao
                                }
                            `
                        }}>
                        
                    </script>
                </Head> */}
                { props.children }
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} alt={'loading'} />
            </div>
        )
    }
    
    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarConteudo()
        // return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}