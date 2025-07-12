import Casestudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Gotidea from "@/components/GotIdea";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Idea />
    <Services />
    <Casestudies />
    <Testimonials />
    <Gotidea />
    <Footer />
    </>
  );
}
