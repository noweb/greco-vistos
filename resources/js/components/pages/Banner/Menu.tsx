export default function Menu() {
    return (
        <div className="flex items-center gap-8">
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
            </div>
            <div className="menu">
                <ul className="flex items-center gap-8">
                    <li className="text-sm font-black text-typography-primary">
                        <a className="p-2" href="#banner">Home</a>
                    </li>
                    <li className="text-sm text-typography-primary hover:text-app-primary transition-colors duration-300">
                        <a className="p-2" href="#quem-somos">Quem somos</a>
                    </li>
                    <li className="text-sm text-typography-primary hover:text-app-primary transition-colors duration-300">
                        <a className="p-2" href="#servicos">Serviços</a>
                    </li>
                    <li className="text-sm text-typography-primary hover:text-app-primary transition-colors duration-300">
                        <a className="p-2" href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
