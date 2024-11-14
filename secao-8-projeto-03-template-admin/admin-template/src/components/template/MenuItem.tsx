import Link from 'next/link'

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <span className={`
                flex flex-col justify-center items-center
                h-20 w-full
            `}>
                { props.icone }

                <span className={`text-xs font-light`}>
                    { props.texto }
                </span>
            </span>
        )
    }
    
    return (
        <li onClick={props.onClick} className={`
            text-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-800
            dark:text-gray-200
            cursor-pointer
            ${props.className}
        `}>
            { props.url ? (
                <Link href={ props.url }>
                    { renderizarLink() }
                </Link>
            ) : (
               renderizarLink()
            )}
            
        </li>
    )
}