import { About } from "@/components/About";
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

export default function Home() {
  return (
    <>
      <Preloader />
      <MotionProvider />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Principles />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
