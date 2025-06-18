import { Home } from '@/pages/home';
import { Button } from '@headlessui/react';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

type WhoWorksProps = {
    home: Pick<
        Home,
        | 'who_works_section_intro_highlight'
        | 'who_works_intro_title'
        | 'who_works_intro_description'
        | 'who_works_title'
        | 'who_works_description'
        | 'who_works_image'
        | 'who_works_details'
    >;
};

function EtapasSection({ steps }: { steps: { title: string; description: string }[] }) {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    return (
        <div className="flex h-full items-center justify-center px-4">
            <div className="mx-auto max-w-3xl">
                <div className="divide-y divide-gray-200">
                    <Fade triggerOnce duration={500} delay={500} cascade>
                        {JSON.parse(steps as unknown as string).map((step: { title: string; description: string }, index: number) => (
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

export default function WhoWorks({ home }: WhoWorksProps) {
    return (
        <Element name="quem-somos">
            <div className="mx-auto max-w-7xl px-6 py-14 2xl:px-0">
                <div className="flex justify-start">
                    <JackInTheBox triggerOnce duration={1000}>
                        <Button className="bg-app-primary flex gap-3 rounded-full px-6 py-2">
                            <span className="text-app-secondary text-[16px] font-semibold">{home.who_works_section_intro_highlight ?? ''}</span>
                        </Button>
                    </JackInTheBox>
                </div>

                <div className="mt-6 grid grid-cols-8">
                    <div className="col-span-8 lg:col-span-3">
                        <Fade triggerOnce duration={1500} delay={200}>
                            <h2 className="text-[40px] leading-[60px]">
                                <span className="text-typography-primary font-semibold uppercase">{home.who_works_intro_title ?? ''}</span>
                            </h2>
                        </Fade>
                    </div>
                    <div className="col-span-8 lg:col-span-5">
                        <Fade triggerOnce duration={1500} delay={400}>
                            <p className="text-typography-secondary text-[16px]">{home.who_works_intro_description ?? ''}</p>
                        </Fade>
                    </div>
                </div>
                <div className="mt-14 grid grid-cols-8">
                    <div className="col-span-8 md:col-span-5">
                        <Slide direction="left" triggerOnce duration={1000} delay={500} className="h-full w-full object-cover">
                            <div className="h-full w-full overflow-hidden rounded-4xl object-cover">
                                <img
                                    src={`/storage/${home.who_works_image as unknown as string}`}
                                    alt="who works"
                                    className="h-full min-h-[750px] w-full object-cover"
                                />
                            </div>
                        </Slide>
                    </div>
                    <div className="col-span-8 mt-0 pt-0 md:col-span-3 md:pl-6">
                        <EtapasSection steps={home.who_works_details} />
                    </div>
                </div>
            </div>
        </Element>
    );
}
