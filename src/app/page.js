import Casestudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Gotidea from "@/components/GotIdea";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Goal from "@/components/Goal";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Goal />
    <Work />
    <Services />
    <Casestudies />
    <Testimonials />
    <Gotidea />
    <Footer />
    </>
  );
}
