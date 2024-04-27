import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Products from "@/components/products";

export default function Home() {
  return (
    <main>
      <div >
       <Hero />
        <Products />
        <Gallery />
      </div>
    </main>
  );
}
