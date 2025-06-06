import { Home } from '@/pages/home';
import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-scroll';

type FooterProps = {
    home: Pick<
        Home,
        | 'footer_title'
        | 'footer_description'
        | 'footer_button_text'
        | 'footer_button_link'
        | 'footer_details'
        | 'footer_instagram_link'
        | 'footer_x_link'
        | 'footer_facebook_link'
        | 'footer_youtube_link'
        | 'footer_whatsapp_link'
        | 'footer_link'
    >;
};

export default function Footer({ home }: FooterProps) {
    const socialLinks = [
        { label: 'Instagram', href: home.footer_instagram_link ?? '' },
        { label: 'X', href: home.footer_x_link ?? '' },
        { label: 'Facebook', href: home.footer_facebook_link ?? '' },
        { label: 'YouTube', href: home.footer_youtube_link ?? '' },
    ];

    const companyLinks = [
        { label: 'Home', to: 'banner' },
        { label: 'Quem somos', to: 'quem-somos' },
        { label: 'Serviços', to: 'servicos' },
        { label: 'Contato', to: 'banner' },
    ];

    // const newsLinks = [
    //     { label: 'Passaporte', href: '#' },
    //     { label: 'Visto', href: '#' },
    //     { label: 'Entrevista', href: '#' },
    //     { label: 'Polícia Federal', href: '#' },
    // ];

    // const supportLinks = [
    //     { label: 'FAQ', href: '#' },
    //     { label: 'Contato', href: '#' },
    //     { label: 'Dúvidas Frequentes', href: '#' },
    // ];

    return (
        <footer className="bg-app-secondary">
            <div className="mx-auto max-w-7xl space-y-10 px-6 py-12 2xl:px-0">
                <div className="flex flex-col gap-16 xl:flex-row xl:items-center xl:justify-between">
                    <div className="space-y-10 xl:w-[456px]">
                        <div className="space-y-3">
                            <h1 className="text-4xl leading-[130.8%] font-medium tracking-[-0.07em] text-white md:text-5xl xl:text-[56px]">
                                {home.footer_title ?? ''}
                            </h1>

                            <p className="tracking-[-0.02em] text-pretty text-white">{home.footer_description ?? ''}</p>
                        </div>
                        <div className="logo flex">
                            <Link to="banner" smooth={true} duration={500} className="cursor-pointer">
                                <div className="logo">
                                    <img src="/logo-2.svg" alt="logo" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <a
                        href={home.footer_button_link ?? ''}
                        target="_blank"
                        className="group flex items-center justify-between border-b !border-white pb-3 xl:w-[500px]"
                    >
                        <h2 className="text-4xl tracking-[-0.06em] text-white xl:text-[40px]">{home.footer_button_text ?? ''}</h2>

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
                                    target="_blank"
                                    className="hover:text-app-primary hover:!border-app-primary flex h-10 items-center justify-center rounded-full border !border-white px-5 py-2.5 text-white transition-all duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="font-plusJakartaSans flex justify-end gap-6 xl:w-[612px]">
                        <div className="space-y-5">
                            <p className="font-bold tracking-[-0.02em] text-white/50">Empresa</p>

                            <div className="flex flex-col space-y-3">
                                {companyLinks.map((company, index) => (
                                    <Link
                                        key={index}
                                        to={company.to}
                                        smooth={true}
                                        duration={500}
                                        className="hover:text-app-primary cursor-pointer tracking-[-0.02em] text-white transition-all duration-300"
                                    >
                                        {company.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* <div className="space-y-5">
                            <p className="font-bold tracking-[-0.02em] text-white/50">Novidades</p>

                            <div className="flex flex-col space-y-3">
                                {newsLinks.map((company, index) => (
                                    <a
                                        className="hover:text-app-primary tracking-[-0.02em] text-white transition-all duration-300"
                                        key={index}
                                        href={company.href}
                                    >
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold tracking-[-0.02em] text-white/50">Suporte</p>

                            <div className="flex flex-col space-y-3">
                                {supportLinks.map((company, index) => (
                                    <a
                                        className="hover:text-app-primary tracking-[-0.02em] text-white transition-all duration-300"
                                        key={index}
                                        href={company.href}
                                    >
                                        {company.label}
                                    </a>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="flex h-20 items-center justify-center border-t px-[60px] text-sm font-medium tracking-[-0.02em] text-white">
                © {new Date().getFullYear()} Greco Vistos - Todos os Direitos Reservados
            </div>
        </footer>
    );
}
