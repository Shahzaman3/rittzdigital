import Casestudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Gotidea from "@/components/GotIdea";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Goal from '@/components/Goal';
import Brand from "@/components/Brand";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Brand />
    <Idea />
    <Goal />
    <Product />
    <Work />
    <Services />
    <Casestudies />
    <Testimonials />
    <Gotidea />
    <Footer />
    </>
  );
}
