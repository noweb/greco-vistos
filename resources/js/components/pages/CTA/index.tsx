export default function CTA() {
    return (
        <div className="bg-app-tertiary py-14">
            <div className="mx-auto flex max-w-7xl  px-6 2xl:px-0 flex-col items-center justify-center">
                <div className="grid grid-cols-8">
                    <h2 className="col-span-8 md:col-span-6 text-[54px] leading-[60px]">
                        <span className="text-typography-primary uppercase">Consultoria completa para tirar seu visto</span>
                    </h2>
                    <span className="col-span-8 md:col-span-2 flex items-start justify-end pr-16">
                        <img src="/images/star-smille.svg" alt="cta icon" className="" />
                    </span>
                </div>
                <div className="grid w-full grid-cols-8">
                    <span className="col-span-8 md:col-span-2 pt-4 pl-16 mb-8 md:mb-0">
                        <img src="/images/sunglasses-smille.svg" alt="cta icon" />
                    </span>
                    <h2 className="col-span-8 md:col-span-6 text-right text-[54px] leading-[60px]">
                        <span className="text-typography-primary text-right uppercase italic">você esta em boas mãos!</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}
