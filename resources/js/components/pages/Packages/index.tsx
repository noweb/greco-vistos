import { Home } from '@/pages/home';
import { Button } from '@headlessui/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon, ArrowRightIcon, Loader2Icon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Fade, JackInTheBox } from 'react-awesome-reveal';

function Card({
    imageUrl,
    title,
    atendimento,
    tempo,
    preco,
    link,
}: {
    imageUrl: string;
    title: string;
    atendimento: string;
    tempo: string;
    preco: string;
    link: string;
}) {
    return (
        <div className="embla__slide flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm select-none">
            <div className="p-3">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-[300px] w-full rounded-t-xl object-cover"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = '/images/no-image.jpg';
                    }}
                />
            </div>

            <div className="flex gap-2 px-4 pt-4">
                <span className="rounded-full border border-gray-300 px-2 py-0.5 text-sm text-gray-900">Basic</span>
                <span className="rounded-full border border-gray-300 px-2 py-0.5 text-sm text-gray-900">Premium</span>
            </div>

            <div className="flex flex-grow flex-col gap-3 p-4">
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>

                <div className="flex justify-between text-sm text-gray-500 gap-x-2">
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
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer rounded-full bg-gray-900 px-5 py-2 text-sm text-white transition hover:bg-gray-700"
                    >
                        Contratar
                    </a>
                </div>
            </div>
        </div>
    );
}

type PackagesProps = {
    home: Pick<Home, 'packages_section_intro_highlight' | 'packages_title'>;
};

export default function Packages({ home }: PackagesProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    const [products, setProducts] = useState<
        {
            id: number;
            image: string;
            title: string;
            service: string;
            time: string;
            price: string;
            link: string;
            tags: string[];
            is_active: boolean;
            created_at: string;
            updated_at: string;
        }[]
    >([]);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const response = await fetch(route('dashboard.pages.packages.products'));
        const data = await response.json();
        setProducts(data);
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

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
                        <span className="text-app-secondary text-[16px] font-medium">{home.packages_section_intro_highlight ?? ''}</span>
                    </Button>
                </JackInTheBox>
            </div>

            <div className="mb-8 flex flex-row items-end justify-between">
                <div className="flex flex-1 flex-col">
                    <Fade triggerOnce duration={1500} delay={300}>
                        <h2 className="mt-2 text-[40px] leading-[60px] font-semibold text-typography-primary">{home.packages_title ?? ''}</h2>
                    </Fade>
                </div>
                <div className="flex flex-row gap-4">
                    <Button
                        onClick={scrollPrev}
                        className="embla__prev border-app-secondary group hover:border-app-primary text-typography-primary flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white p-2 transition-all duration-300"
                    >
                        <ArrowLeftIcon className="group-hover:text-app-primary h-8 w-8 transition-all duration-300 group-hover:-translate-x-0.5" />
                    </Button>
                    <Button
                        onClick={scrollNext}
                        className="embla__next bg-app-secondary border-app-secondary group hover:bg-app-primary hover:border-app-primary flex aspect-square h-10 w-10 cursor-pointer items-center justify-center rounded-full border p-2 transition-all duration-300"
                    >
                        <ArrowRightIcon className="h-8 w-8 text-white transition-all duration-300 group-hover:translate-x-0.5" />
                    </Button>
                </div>
            </div>

            <Fade triggerOnce duration={1500} delay={600} cascade>
                <div className="embla" ref={emblaRef}>
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <Loader2Icon className="h-8 w-8 animate-spin text-gray-500" />
                        </div>
                    ) : (
                        <div className="embla__container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {products?.map((detail) => (
                                <Card
                                    key={detail.id}
                                    imageUrl={detail.image}
                                    title={detail.title}
                                    atendimento={detail.service}
                                    tempo={detail.time}
                                    preco={detail.price}
                                    link={detail.link}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Fade>
        </div>
    );
}
