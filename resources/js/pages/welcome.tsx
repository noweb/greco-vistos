import Banner from '@/components/pages/Banner';
import CTA from '@/components/pages/CTA';
import Destinations from '@/components/pages/Destinations';
import Footer from '@/components/pages/Footer';
import Packages from '@/components/pages/Packages';
import WhoWorks from '@/components/pages/WhoWorks';

export default function Welcome() {
    return (
        <>
            <Banner />
            <CTA />
            <WhoWorks />
            <Destinations />
            <Packages />
            <Footer />
        </>
    );
}
