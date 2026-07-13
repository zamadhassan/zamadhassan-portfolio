import { About } from "@/components/About";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/MotionProvider";
import { Portfolio } from "@/components/Portfolio";
import { Preloader } from "@/components/Preloader";
import { Principles } from "@/components/Principles";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Preloader />
      <MotionProvider />
      <BackgroundBoxes />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Principles />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
