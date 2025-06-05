import { Button } from '@headlessui/react';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

const steps = [
    {
        title: 'Etapa Inicial',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
        title: 'Entrega de Documentos',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
        title: 'Entrega de Documentos',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
];

function EtapasSection() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    return (
        <div className="px-4 h-full flex items-center justify-center">
            <div className="mx-auto max-w-3xl">
                <div className="divide-y divide-gray-200">
                    <Fade triggerOnce duration={500} delay={500} cascade>
                        {steps.map((step, index) => (
                            <div key={index} className="py-6">
                                <h3 className="text-4xl font-semibold text-gray-900">{step.title}</h3>
                                {expandedIndex !== index && (
                                    <button
                                        onClick={() => setExpandedIndex(expandedIndex === index ? 0 : index)}
                                        className="mt-2 flex cursor-pointer items-center gap-1 text-sm font-semibold text-gray-700"
                                    >
                                        <PlusIcon
                                            className={`h-4 w-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-45' : ''}`}
                                        />
                                        Leia mais
                                    </button>
                                )}
                                {expandedIndex === index && <p className="mt-4 text-gray-600">{step.description}</p>}
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default function WhoWorks() {
    return (
        <Element name="quem-somos">
            <div className="mx-auto max-w-7xl px-6 py-14 2xl:px-0">
                <div className="flex justify-start">
                    <JackInTheBox triggerOnce duration={1000}>
                        <Button className="bg-app-primary flex gap-3 rounded-full px-6 py-2">
                            <span className="text-app-secondary text-[16px] font-semibold">Veja como funciona</span>
                        </Button>
                    </JackInTheBox>
                </div>

                <div className="mt-6 grid grid-cols-8">
                    <div className="col-span-8 lg:col-span-3">
                        <Fade triggerOnce duration={1500} delay={200}>
                            <h2 className="text-[40px] leading-[60px]">
                                <span className="text-typography-primary font-semibold uppercase">Sua tranquilidade não tem preço!</span>
                            </h2>
                        </Fade>
                    </div>
                    <div className="col-span-8 lg:col-span-5">
                        <Fade triggerOnce duration={1500} delay={400}>
                            <p className="text-typography-secondary text-[16px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="mt-14 grid grid-cols-8">
                    <div className="col-span-8 overflow-hidden rounded-4xl md:col-span-5">
                        <Slide direction="left" triggerOnce duration={1000} delay={500}>
                            <img src="/images/who-works-image.png" alt="who works" className="h-full w-full object-cover" />
                        </Slide>
                    </div>
                    <div className="col-span-8 md:col-span-3 md:pl-6 pt-0 mt-0">
                        <EtapasSection />
                    </div>
                </div>
            </div>
        </Element>
    );
}
