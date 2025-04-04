import Cta from '@/components/external/landing-page/cta';
import Features from '@/components/external/landing-page/features';
import Footer from '@/components/external/landing-page/footer';
import Hero from '@/components/external/landing-page/hero';
import Navbar from '@/components/external/landing-page/navbar';
import Testimonials from '@/components/external/landing-page/testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
