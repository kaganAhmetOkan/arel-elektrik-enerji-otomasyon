import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const navbar = [
    { name: "Hakkında", href: "/#about"},
    { name: "İletişim", href: "/#contact" },
  ];
  const hero = ["AREL", "Elektrik", "& Enerji", "Otomasyon"];

  return (
    <main>
      <Navbar>{navbar}</Navbar>
      <Hero>{hero}</Hero>
      <About />
      <Contact />
      <Footer />
    </main>
  );
};