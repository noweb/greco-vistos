import { Button } from '@headlessui/react';
import { Fade, JackInTheBox, Zoom } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

const destinos = [
    {
        nome: 'Bali, Indonesia',
        imagem: '/images/locations/bali.png',
    },
    {
        nome: 'Nova York, Estados Unidos',
        imagem: '/images/locations/nova_york.png',
    },
    {
        nome: 'Santorini, Grécia',
        imagem: '/images/locations/santorini.png',
    },
    {
        nome: 'Paris, França',
        imagem: '/images/locations/franca.png',
    },
    {
        nome: 'Cidade do Cabo, África do Sul',
        imagem: '/images/locations/cidade_do_cabo.png',
    },
    {
        nome: 'Mumbai, India',
        imagem: '/images/locations/mumbai.png',
    },
];

function DestinationsGrid() {
    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {destinos.map((destino, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-3xl ${index === 0 || index === 2 ? 'md:h-[90%] md:self-end' : ''} ${index === 3 || index === 5 ? 'md:h-[90%] md:self-start' : ''}`}
                    >
                        <Fade triggerOnce duration={1500} delay={150 * index}>
                            <img
                                src={destino.imagem}
                                alt={destino.nome}
                                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </Fade>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-auto rounded-full bg-white/10 px-3 py-1.5 font-medium whitespace-nowrap text-white shadow-md backdrop-blur-md transition">
                            {destino.nome}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function Destinations() {
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
                            <span className="text-app-secondary text-[16px] font-semibold">Top Destinos</span>
                        </Button>
                    </JackInTheBox>

                    <Fade triggerOnce duration={1500} delay={200}>
                        <h2 className="text-typography-primary mt-6 max-w-3xl text-center text-[56px] font-semibold">Destinos mais procurados</h2>
                    </Fade>
                    <Fade triggerOnce duration={1500} delay={400}>
                        <p className="text-typography-secondary mt-2 max-w-3xl text-center text-[16px]">
                            Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?
                        </p>
                    </Fade>

                    <Zoom triggerOnce duration={1000} delay={600}>
                        <Button className="bg-app-secondary hover:bg-app-secondary/80 mt-10 flex cursor-pointer gap-3 rounded-full px-6 py-2 transition-all duration-300">
                            <span className="text-[16px] font-semibold text-white">Conheça mais</span>
                        </Button>
                    </Zoom>
                </div>

                <DestinationsGrid />
            </div>
        </Element>
    );
}
