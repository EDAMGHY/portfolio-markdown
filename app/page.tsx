import { Footer, Header } from "@/layout";
import { Contact, Hero, Projects, Stack } from "@/widgets";

export default function Home() {
  return (
    <>
      <Header />
      <main className='container'>
        <Hero />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
