import { Banner } from "@/components/component/banner";
import { Weather } from "@/components/component/weather";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Products from "@/components/products";
import TrpcClient from "@/components/trpcClient";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <TrpcClient />
        <Products />
        <Gallery />
        <Weather />
        <Banner />
      </div>
    </main>
  );
}
