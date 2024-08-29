import FastSolutions from "@/components/Home/FastSolutions";
import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <FastSolutions></FastSolutions>
      <OurServices></OurServices>
    </main>
  );
}
