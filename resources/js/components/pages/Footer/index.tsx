import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
    const socialLinks = [
        { label: 'Instagram', href: '#' },
        { label: 'X', href: '#' },
        { label: 'Facebook', href: '#' },
        { label: 'YouTube', href: '#' },
    ];

    const companyLinks = [
        { label: 'Home', href: '#' },
        { label: 'Quem somos', href: '#' },
        { label: 'Serviços', href: '#' },
        { label: 'Contato', href: '#' },
    ];

    const newsLinks = [
        { label: 'Passaporte', href: '#' },
        { label: 'Visto', href: '#' },
        { label: 'Entrevista', href: '#' },
        { label: 'Polícia Federal', href: '#' },
    ];

    const supportLinks = [
        { label: 'FAQ', href: '#' },
        { label: 'Contato', href: '#' },
        { label: 'Dúvidas Frequentes', href: '#' },
    ];

    return (
        <footer className="bg-app-secondary">
            <div className="mx-auto max-w-7xl space-y-10 px-6 py-12 2xl:px-0">
                <div className="flex flex-col gap-16 xl:flex-row xl:items-center xl:justify-between">
                    <div className="space-y-10 xl:w-[456px]">
                        <div className="space-y-3">
                            <h1 className="text-4xl leading-[130.8%] font-medium tracking-[-0.07em] text-white md:text-5xl xl:text-[56px]">
                                Está com alguma dúvida?
                            </h1>

                            <p className="tracking-[-0.02em] text-pretty text-white">
                                Entre em contato através do nosso canal direto ao cliente através do botão abaixo
                            </p>
                        </div>
                        <div className="logo flex">
                            <Link to="banner" smooth={true} duration={500} className="cursor-pointer">
                                <div className="logo">
                                    <img src="/logo-2.svg" alt="logo" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <a href="#" className="group flex items-center justify-between border-b !border-white pb-3 xl:w-[500px]">
                        <h2 className="text-4xl tracking-[-0.06em] text-white xl:text-[40px]">Receba novidades</h2>

                        <ArrowUpRightIcon className="h-12 w-12 stroke-[1px] text-white transition-all duration-300 group-hover:rotate-45" />
                    </a>
                </div>

                <div className="flex flex-col gap-16 xl:flex-row xl:items-end xl:justify-between">
                    <div className="space-y-5">
                        <p className="font-semibold tracking-[-0.02em] text-white">Siga em nossas redes:</p>

                        <div className="flex flex-wrap gap-3 sm:gap-5">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="flex h-10 items-center justify-center rounded-full border !border-white px-5 py-2.5 text-white transition-all duration-300 hover:text-app-primary hover:!border-app-primary"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="font-plusJakartaSans flex justify-between gap-6 xl:w-[612px]">
                        <div className="space-y-5">
                            <p className="font-bold tracking-[-0.02em] text-white/50">Empresa</p>

                            <div className="flex flex-col space-y-3">
                                {companyLinks.map((company, index) => (
                                    <a className="tracking-[-0.02em] text-white transition-all duration-300 hover:text-app-primary" key={index} href={company.href}>
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold tracking-[-0.02em] text-white/50">Novidades</p>

                            <div className="flex flex-col space-y-3">
                                {newsLinks.map((company, index) => (
                                    <a className="tracking-[-0.02em] text-white transition-all duration-300 hover:text-app-primary" key={index} href={company.href}>
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold tracking-[-0.02em] text-white/50">Suporte</p>

                            <div className="flex flex-col space-y-3">
                                {supportLinks.map((company, index) => (
                                    <a className="tracking-[-0.02em] text-white transition-all duration-300 hover:text-app-primary" key={index} href={company.href}>
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-20 items-center justify-center border-t px-[60px] text-sm font-medium tracking-[-0.02em] text-white">
                © {new Date().getFullYear()} Greco Vistos - Todos os Direitos Reservados
            </div>
        </footer>
    );
}
