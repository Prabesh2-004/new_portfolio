import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Project";
import Skills from "@/components/Skill";
import SocialLink from "@/components/socialLink";

export default function HomePage() {
    return <div className="bg-[#000000]">
        <Navbar />
        <SocialLink />
        <HeroSection />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
    </div>
}