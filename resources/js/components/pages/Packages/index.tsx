import { Button } from '@headlessui/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useCallback } from 'react';
import { Fade, JackInTheBox } from 'react-awesome-reveal';

function Card({
    imageUrl,
    title,
    atendimento,
    tempo,
    preco,
}: {
    imageUrl: string;
    title: string;
    atendimento: string;
    tempo: string;
    preco: string;
}) {
    return (
        <div className="embla__slide flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-3">
                <img src={imageUrl} alt={title} className="h-[300px] w-full rounded-t-xl object-cover" />
            </div>

            <div className="flex gap-2 px-4 pt-4">
                <span className="rounded-full border border-gray-300 px-2 py-0.5 text-sm text-gray-900">Basic</span>
                <span className="rounded-full border border-gray-300 px-2 py-0.5 text-sm text-gray-900">Premium</span>
            </div>

            <div className="flex flex-grow flex-col gap-3 p-4">
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>

                <div className="flex justify-between text-sm text-gray-500">
                    <div>
                        <p className="font-medium text-gray-900">Atendimento</p>
                        <p className="mt-2">{atendimento}</p>
                    </div>
                    <div className="flex w-[100px] flex-col">
                        <p className="font-medium text-gray-900">Tempo</p>
                        <p className="mt-2">{tempo}</p>
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-2">
                    <div className="text-sm text-gray-500">
                        <p>A partir de</p>
                        <p className="text-xl font-semibold text-gray-900">{preco}</p>
                    </div>
                    <button className="cursor-pointer rounded-full bg-gray-900 px-5 py-2 text-sm text-white transition hover:bg-gray-700">
                        Contratar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Packages() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    // useEffect(() => {
    //     if (emblaApi) {
    //         console.log(emblaApi.slideNodes());
    //     }
    // }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="mx-auto max-w-7xl px-6 py-14 2xl:px-0">
            <div className="flex justify-start">
                <JackInTheBox triggerOnce duration={1000}>
                    <Button className="bg-app-primary flex gap-3 rounded-full px-6 py-2">
                        <span className="text-app-secondary text-[16px] font-medium">Pacotes</span>
                    </Button>
                </JackInTheBox>
            </div>

            <div className="mb-8 flex flex-row items-end justify-between">
                <div className="flex flex-1 flex-col">
                    <Fade triggerOnce duration={1500} delay={300}>
                        <h2 className="mt-2 text-[40px] leading-[60px] font-semibold">Confira nossos pacotes</h2>
                    </Fade>
                </div>
                <div className="flex flex-row gap-4">
                    <Button
                        onClick={scrollPrev}
                        className="embla__prev border-app-secondary flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white p-2 group hover:border-app-primary transition-all duration-300"
                    >
                        <ArrowLeftIcon className="h-8 w-8 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-app-primary" />
                    </Button>
                    <Button
                        onClick={scrollNext}
                        className="embla__next bg-app-secondary border-app-secondary flex aspect-square h-10 w-10 group cursor-pointer items-center justify-center rounded-full border p-2 transition-all duration-300 hover:bg-app-primary hover:border-app-primary"
                    >
                        <ArrowRightIcon className="h-8 w-8 text-white transition-all duration-300 group-hover:translate-x-0.5" />
                    </Button>
                </div>
            </div>

            <Fade triggerOnce duration={1500} delay={600} cascade>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card
                            imageUrl="/images/packages/img-2.png"
                            title="Passaporte + Visto"
                            atendimento="On-line + Presencial"
                            tempo="25 dias"
                            preco="R$ 200,00"
                        />
                        <Card
                            imageUrl="/images/packages/img-3.png"
                            title="Consultoria Completa"
                            atendimento="Presencial Completo"
                            tempo="10 dias"
                            preco="R$ 300,00"
                        />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                        <Card imageUrl="/images/packages/img-1.png" title="Passaporte" atendimento="On-line" tempo="45 dias" preco="R$ 100,00" />
                    </div>
                </div>
            </Fade>
        </div>
    );
}
