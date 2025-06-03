import { Button } from '@/components/ui/button';
import { ArrowUpRightIcon } from 'lucide-react';

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
            <div className="space-y-10 py-12 max-w-7xl  px-6 2xl:px-0 mx-auto px-6 2xl:px-0">
                <div className="flex flex-col gap-16 xl:flex-row xl:items-center xl:justify-between">
                    <div className="space-y-10 xl:w-[456px]">
                        <div className="space-y-3">
                            <h1 className="text-white text-4xl leading-[130.8%] font-medium tracking-[-0.07em] md:text-5xl xl:text-[56px]">
                                Está com alguma dúvida?
                            </h1>

                            <p className="text-white tracking-[-0.02em] text-pretty">
                                Entre em contato através do nosso canal direto ao cliente através do botão abaixo
                            </p>
                        </div>

                        <Button className="h-[54px]">Central de Atendimento</Button>
                    </div>

                    <a href="#" className="flex items-center justify-between border-b !border-white group pb-3 xl:w-[500px]">
                        <h2 className="text-4xl tracking-[-0.06em] xl:text-[40px] text-white">Receba novidades</h2>

                        <ArrowUpRightIcon className="h-12 w-12 text-white stroke-[1px] group-hover:rotate-45 transition-all duration-300" />
                    </a>
                </div>

                <div className="flex flex-col gap-16 xl:flex-row xl:items-end xl:justify-between">
                    <div className="space-y-5">
                        <p className="text-white font-semibold tracking-[-0.02em]">Siga em nossas redes:</p>

                        <div className="flex flex-wrap gap-3 sm:gap-5">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="!border-white text-white flex h-10 items-center justify-center rounded-full border px-5 py-2.5"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="font-plusJakartaSans flex justify-between gap-6 xl:w-[612px]">
                        <div className="space-y-5">
                            <p className="tracking-[-0.02em] text-white/50 font-bold">Empresa</p>

                            <div className="flex flex-col space-y-3">
                                {companyLinks.map((company, index) => (
                                    <a className="text-white tracking-[-0.02em]" key={index} href={company.href}>
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="tracking-[-0.02em] text-white/50 font-bold">Novidades</p>

                            <div className="flex flex-col space-y-3">
                                {newsLinks.map((company, index) => (
                                    <a className="text-white tracking-[-0.02em]" key={index} href={company.href}>
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="tracking-[-0.02em] text-white/50 font-bold">Suporte</p>

                            <div className="flex flex-col space-y-3">
                                {supportLinks.map((company, index) => (
                                    <a className="text-white tracking-[-0.02em]" key={index} href={company.href}>
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
