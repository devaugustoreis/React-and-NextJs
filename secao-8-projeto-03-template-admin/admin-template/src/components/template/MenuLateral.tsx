import useAuth from "@/data/hook/useAuth";
import { IconeAjustes, IconeHome, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside className={`
                flex flex-col 
                bg-gray-200 
                dark:bg-gray-900 
            `}>
            <div className={`
                flex flex-col justify-center items-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20`
            }>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={ IconeHome } />
                <MenuItem url="/ajustes" texto="Ajustes" icone={ IconeAjustes } />
                <MenuItem url="/notificacoes" texto="Notificações" icone={ IconeSino } />
            </ul>
            <ul>
                <MenuItem 
                    icone={ IconeSair }
                    texto="sair" 
                    onClick={logout} 
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}