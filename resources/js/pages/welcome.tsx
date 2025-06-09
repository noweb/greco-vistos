import Banner from '@/components/pages/Banner';
import CTA from '@/components/pages/CTA';
import Destinations from '@/components/pages/Destinations';
import Footer from '@/components/pages/Footer';
import Packages from '@/components/pages/Packages';
import WhoWorks from '@/components/pages/WhoWorks';
import { Head, usePage } from '@inertiajs/react';
import { Toaster } from 'sonner';
import { Home } from './home';

export default function Welcome() {
    const { home } = usePage<{ home: Home }>().props;

    return (
        <>
            <Head title={home.page_title ?? 'Tirar Visto'} />
            <Toaster />
            <Banner home={home} />
            <CTA home={home} />
            <WhoWorks home={home} />
            <Destinations home={home} />
            <Packages home={home} />
            <Footer home={home} />
        </>
    );
}
