import { Button } from '@headlessui/react';
import { Fade, JackInTheBox, Zoom } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Home } from '@/pages/home';

function DestinationsGrid({ destinations }: { destinations: { title: string; image: File | string; description?: string }[] }) {
    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {destinations.map((destino: { title: string; image: File | string; description?: string }, index: number) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-3xl ${index === 0 || index === 2 ? 'md:h-[90%] md:self-end' : ''} ${index === 3 || index === 5 ? 'md:h-[90%] md:self-start' : ''}`}
                    >
                        <Fade triggerOnce duration={1500} delay={150 * index}>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <img
                                        src={`/storage/${destino.image as unknown as string}`}
                                        alt={destino.title}
                                        className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </DialogTrigger>
                                <DialogContent className="!max-w-5xl overflow-hidden p-0 [&>button]:hidden">
                                    <div className="grid grid-cols-6 gap-4">
                                        <img
                                            src={`/storage/${destino.image as unknown as string}`}
                                            alt={destino.title}
                                            className="col-span-3 aspect-square w-full rounded-lg bg-gray-200 object-cover"
                                        />
                                        <div className="col-span-3 h-[500px] overflow-y-auto px-3 py-5">
                                            <div className="flex flex-col gap-4">
                                                <DialogTitle className="text-typography-primary text-[24px] font-semibold">
                                                    {destino.title}
                                                </DialogTitle>
                                                <DialogDescription className="text-typography-secondary text-[16px] leading-relaxed">
                                                    {destino.description ?? ''}
                                                </DialogDescription>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </Fade>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-auto rounded-full bg-white/10 px-3 py-1.5 font-medium whitespace-nowrap text-white shadow-md backdrop-blur-md transition">
                            {destino.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

type DestinationsProps = {
    home: Pick<
        Home,
        | 'destinations_section_intro_highlight'
        | 'destinations_title'
        | 'destinations_description'
        | 'destinations_button_text'
        | 'destinations_button_link'
        | 'destinations_details'
    >;
};

export default function Destinations({ home }: DestinationsProps) {
    return (
        <Element name="servicos">
            <div className="relative flex w-full flex-col items-center justify-center px-3 py-6 md:p-12">
                <div
                    className="absolute flex h-[400px] w-full"
                    style={{
                        backgroundImage: 'url(/images/bg_layer.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                <div className="mx-auto inline-flex flex-col items-center justify-center">
                    <JackInTheBox triggerOnce duration={1000}>
                        <Button className="bg-app-primary flex gap-3 rounded-full px-6 py-2">
                            <span className="text-app-secondary text-[16px] font-semibold">{home.destinations_button_text ?? ''}</span>
                        </Button>
                    </JackInTheBox>

                    <Fade triggerOnce duration={1500} delay={200}>
                        <h2 className="text-typography-primary mt-6 max-w-3xl text-center text-[56px] font-semibold">
                            {home.destinations_title ?? ''}
                        </h2>
                    </Fade>
                    <Fade triggerOnce duration={1500} delay={400}>
                        <p className="text-typography-secondary mt-2 max-w-3xl text-center text-[16px]">{home.destinations_description ?? ''}</p>
                    </Fade>

                    <Zoom triggerOnce duration={1000} delay={600}>
                        <a
                            href={home.destinations_button_link ?? ''}
                            target="_blank"
                            className="bg-app-secondary hover:bg-app-secondary/80 mt-10 flex cursor-pointer gap-3 rounded-full px-6 py-2 transition-all duration-300"
                        >
                            <span className="text-[16px] font-semibold text-white">{home.destinations_button_text ?? ''}</span>
                        </a>
                    </Zoom>
                </div>

                <DestinationsGrid destinations={home.destinations_details} />
            </div>
        </Element>
    );
}
