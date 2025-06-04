import { Slide, Zoom } from 'react-awesome-reveal';

export default function CTA() {
    return (
        <div className="bg-app-tertiary py-14">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 2xl:px-0">
                <div className="grid grid-cols-8">
                    <h2 className="col-span-8 text-[54px] leading-[60px] md:col-span-6">
                        <Slide direction="left" triggerOnce duration={1500}>
                            <span className="text-typography-primary uppercase">Consultoria completa para tirar seu visto</span>
                        </Slide>
                    </h2>
                    <span className="col-span-8 flex items-start justify-end pr-16 md:col-span-2">
                        <Zoom triggerOnce duration={500}>
                            <img src="/images/star-smille.svg" alt="cta icon" className="" />
                        </Zoom>
                    </span>
                </div>
                <div className="grid w-full grid-cols-8">
                    <span className="col-span-8 mb-8 pt-4 pl-16 md:col-span-2 md:mb-0">
                        <Zoom triggerOnce duration={500}>
                            <img src="/images/sunglasses-smille.svg" alt="cta icon" />
                        </Zoom>
                    </span>
                    <h2 className="col-span-8 text-right text-[54px] leading-[60px] md:col-span-6">
                        <Slide direction="right" triggerOnce>
                            <span className="text-typography-primary text-right uppercase italic">você esta em boas mãos!</span>
                        </Slide>
                    </h2>
                </div>
            </div>
        </div>
    );
}
