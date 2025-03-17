// import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export const metadata = {
  title: "Strapi - Next.js",
  description: "Next.js + Strapi"
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Categories /> */}
    </>
  );
}