import About from "@/components/about";
import Footer from "@/components/footer";
import Intro from "@/components/home";
import Generator from "@/components/generator";
import SectionDivider from "@/components/section-divider";
import Team from "@/components/team";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Generator />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Team />
      <SectionDivider />      
      <Footer />
    </main>
  )
}
