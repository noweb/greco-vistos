import { CountUp } from '@/components/count-up';
import { Button } from '@headlessui/react';
import { ArrowRightIcon } from 'lucide-react';
import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import Menu from './Menu';
import { Element } from 'react-scroll';

function StatsSection() {
    const stats = [
        { value: 509, label: 'Vistos Tirados' },
        { value: 602, label: 'Passaportes Tirados' },
        { value: 634, label: 'Famílias Felizes' },
    ];

    return (
        <div className="py-12">
            <div className="gap-10 divide-y divide-gray-200 md:flex md:flex-row md:divide-x md:divide-y-0">
                {stats.map((stat, index) => (
                    <Fade key={index} triggerOnce duration={1000} delay={200 * index} cascade>
                        <div className="flex flex-col items-center py-6 md:pr-10">
                            <span className="text-3xl font-semibold text-gray-900">
                                <CountUp to={stat.value} duration={2} /> +
                            </span>
                            <span className="mt-2 text-sm text-gray-500">{stat.label}</span>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
}

export default function Banner() {
    return (
        <Element name="banner">
            <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-12 pl-6 2xl:px-0">
                <div className="col-span-12 flex flex-col pt-6 md:col-span-6">
                    <Menu />
                    <Slide triggerOnce duration={600} delay={200} direction="right">
                        <Fade triggerOnce duration={1000} delay={700}>
                            <div className="bg-app-secondary mt-12 w-full rounded-l-4xl p-8">
                                <h1 className="text-typography-primary text-[54px] leading-[60px]">
                                    <span className="text-white">Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</span>
                                </h1>
                            </div>
                        </Fade>
                    </Slide>
                    <div className="mt-12 flex flex-row gap-14">
                        <div className="flex flex-1 flex-col">
                            <Fade triggerOnce duration={1000} delay={300} cascade>
                                <h2 className="text-typography-secondary text-[16px]">
                                    Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e
                                    rápido. Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
                                </h2>
                                <div className="mt-10">
                                    <Button className="bg-app-secondary hover:bg-app-primary group flex gap-3 rounded-full px-6 py-3 text-white transition-all duration-300">
                                        <span className="text-[16px] text-white">Saiba mais</span>
                                        <ArrowRightIcon className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-1.5" />
                                    </Button>
                                </div>
                            </Fade>
                        </div>
                        <Fade triggerOnce duration={600} delay={200}>
                            <a href="#" className="flex flex-col items-start justify-start pr-8">
                                <img
                                    src="/images/banner_video.png"
                                    alt="banner image video"
                                    className="aspect-video w-[180px] overflow-hidden rounded-2xl object-cover"
                                />
                                <div className="flex w-full flex-row">
                                    <div className="flex flex-1 flex-col items-start justify-center">
                                        <h3 className="text-typography-primary mt-3 text-[14px] font-semibold">Conheça a Bruna</h3>
                                        <button className="text-typography-tertiary mt-1 cursor-pointer text-[14px]">Ver vídeo</button>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="bg-app-secondary aspect-square rounded-full p-1 text-white">
                                            <ArrowRightIcon className="h-6 w-6 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </Fade>
                    </div>

                    <StatsSection />
                </div>

                <div className="absolute top-0 right-0 hidden h-screen w-[50vw] py-6 pr-6 md:block">
                    <Slide triggerOnce duration={600} delay={200} direction="right" className="relative h-full w-full overflow-hidden rounded-4xl">
                        <div className="relative h-full w-full overflow-hidden rounded-4xl">
                            <img className="h-full w-full object-cover" src="/images/banner_image.png" alt="banner image" />
                            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 flex w-full flex-col p-8">
                                <Slide direction="up" triggerOnce duration={1000} delay={600} cascade>
                                    <Fade triggerOnce duration={1000} delay={600} cascade>
                                        <h2 className="text-[44px] font-bold text-white">Realize o seu sonho com a ajuda da Tirar Visto!</h2>
                                        <p className="text-white">
                                            Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no
                                            consulado.
                                        </p>
                                    </Fade>
                                </Slide>
                            </div>
                            <div className="absolute top-0 right-0 p-5">
                                <JackInTheBox triggerOnce duration={1000} delay={400}>
                                    <Button className="bg-app-primary flex cursor-pointer gap-3 rounded-full px-6 py-2 text-white transition-all duration-300 hover:bg-white">
                                        <span className="text-app-secondary text-[16px] font-semibold">Tirar meu visto agora!</span>
                                    </Button>
                                </JackInTheBox>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </Element>
    );
}
