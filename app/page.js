import Features from "@/components/features";
import Hero from "@/components/hero";
import Howitworks from "@/components/Howitworks";
import Nav from "@/components/nav";
import Partners from "@/components/partners";
import PricePage from "@/components/PricePage";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import About from "@/components/about";


export default function Home() {
  return (
    <div>

      <Hero />
    <Partners />
    <Howitworks/>
    <Features/>
    <PricePage/>
    <Testimonials />
  
    </div>
  );
}
