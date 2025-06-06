import { CountUp } from '@/components/count-up';
import { Button } from '@headlessui/react';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal';
import { Element } from 'react-scroll';
import Menu from './Menu';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Home } from '@/pages/home';
import { router } from '@inertiajs/react';

function StatsSection({ stats }: { stats: { value: string; label: string }[] }) {
    return (
        <div className="py-12">
            <div className="gap-10 divide-y divide-gray-200 md:flex md:flex-row md:divide-x md:divide-y-0">
                {stats.map((stat, index) => (
                    <Fade key={index} triggerOnce duration={1000} delay={200 * index} cascade>
                        <div className="flex flex-col items-center py-6 md:pr-10">
                            <span className="text-3xl font-semibold text-gray-900">
                                <CountUp to={Number(stat.value)} duration={2} /> +
                            </span>
                            <span className="mt-2 text-sm text-gray-500">{stat.label}</span>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
}

type BannerProps = {
    home: Pick<
        Home,
        | 'banner_title'
        | 'banner_description'
        | 'banner_image'
        | 'banner_image_button_text'
        | 'banner_image_button_link'
        | 'banner_button_text'
        | 'banner_button_link'
        | 'banner_image_title'
        | 'banner_image_description'
        | 'banner_section_details_1_title'
        | 'banner_section_details_1_description'
        | 'banner_section_details_2_title'
        | 'banner_section_details_2_description'
        | 'banner_section_details_3_title'
        | 'banner_section_details_3_description'
        | 'banner_video_title'
        | 'banner_video_image'
        | 'banner_video_url'
    >;
};

export default function Banner({ home }: BannerProps) {
    return (
        <Element name="banner">
            <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-12 pl-6 2xl:px-0">
                <div className="col-span-12 flex flex-col pt-6 md:col-span-6">
                    <Menu />
                    <Slide triggerOnce duration={600} delay={200} direction="right">
                        <Fade triggerOnce duration={1000} delay={700}>
                            <div className="bg-app-secondary mt-12 w-full rounded-l-4xl p-8">
                                <h1 className="text-typography-primary text-[54px] leading-[60px]">
                                    <span className="text-white">{home.banner_title ?? ''}</span>
                                </h1>
                            </div>
                        </Fade>
                    </Slide>
                    <div className="mt-12 flex flex-row gap-14">
                        <div className="flex flex-1 flex-col">
                            <Fade triggerOnce duration={1000} delay={300} cascade>
                                <h2 className="text-typography-secondary text-[16px]">{home.banner_description ?? ''}</h2>
                                <div className="mt-10">
                                    <a
                                        href={home.banner_button_link ?? ''}
                                        className="bg-app-secondary hover:bg-app-primary group flex gap-3 rounded-full px-6 py-3 text-white transition-all duration-300"
                                    >
                                        <span className="text-[16px] text-white">{home.banner_button_text ?? ''}</span>
                                        <ArrowRightIcon className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-1.5" />
                                    </a>
                                </div>
                            </Fade>
                        </div>
                        <Fade triggerOnce duration={600} delay={200}>
                            <Dialog>
                                <DialogTrigger>
                                    <button className="mr-3.5 flex cursor-pointer flex-col items-start justify-start pr-8">
                                        <div className="aspect-video w-[180px] overflow-hidden rounded-2xl relative">
                                            <img
                                                src={`/storage/${home.banner_video_image as unknown as string}`}
                                                alt="banner image video"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/no-image.jpg';
                                                }}
                                                className="aspect-video w-[180px] overflow-hidden rounded-2xl object-cover"
                                            />
                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <PlayIcon className="h-6 w-6 text-white bg-app-primary rounded-full p-1" />
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-row">
                                            <div className="flex flex-1 flex-col items-start justify-center">
                                                <h3 className="text-typography-primary mt-3 text-[14px] font-semibold">
                                                    {home.banner_video_title ?? ''}
                                                </h3>
                                                <button
                                                    onClick={() => router.visit(home.banner_video_url ?? '')}
                                                    className="text-typography-tertiary mt-1 cursor-pointer text-[14px]"
                                                >
                                                    Ver vídeo
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <button className="bg-app-secondary aspect-square rounded-full p-1 text-white">
                                                    <ArrowRightIcon className="h-6 w-6 text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="!max-w-5xl overflow-hidden p-0">
                                    <div className="relative aspect-video w-full">
                                        <div className="bg-app-primary absolute top-0 left-1/2 -translate-x-1/2 rounded-b-3xl px-6 py-2">
                                            <h3 className="text-typography-primary text-[16px] font-semibold">{home.banner_video_title ?? ''}</h3>
                                        </div>
                                        <iframe
                                            className="h-full w-full"
                                            src={home.banner_video_url ?? ''}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </Fade>
                    </div>

                    <StatsSection
                        stats={[
                            { value: home.banner_section_details_1_title ?? '', label: home.banner_section_details_1_description ?? '' },
                            { value: home.banner_section_details_2_title ?? '', label: home.banner_section_details_2_description ?? '' },
                            { value: home.banner_section_details_3_title ?? '', label: home.banner_section_details_3_description ?? '' },
                        ]}
                    />
                </div>

                <div className="absolute top-0 right-0 hidden h-screen w-[50vw] py-6 pr-6 md:block">
                    <Slide triggerOnce duration={600} delay={200} direction="right" className="relative h-full w-full overflow-hidden rounded-4xl">
                        <div className="relative h-full w-full overflow-hidden rounded-4xl">
                            <img
                                className="h-full w-full object-cover"
                                src={`/storage/${home.banner_image as unknown as string}`}
                                alt="banner image"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/no-image.jpg';
                                }}
                            />
                            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 flex w-full flex-col p-8">
                                <Slide direction="up" triggerOnce duration={1000} delay={600} cascade>
                                    <Fade triggerOnce duration={1000} delay={600} cascade>
                                        <h2 className="text-[44px] font-bold text-white">{home.banner_image_title ?? ''}</h2>
                                        <p className="text-white">{home.banner_image_description ?? ''}</p>
                                    </Fade>
                                </Slide>
                            </div>
                            <div className="absolute top-0 right-0 p-5">
                                <JackInTheBox triggerOnce duration={1000} delay={400}>
                                    <Button
                                        className="bg-app-primary flex cursor-pointer gap-3 rounded-full px-6 py-2 text-white transition-all duration-300 hover:bg-white"
                                        onClick={() => router.visit(home.banner_image_button_link ?? '')}
                                    >
                                        <span className="text-app-secondary text-[16px] font-semibold">{home.banner_image_button_text ?? ''}</span>
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
