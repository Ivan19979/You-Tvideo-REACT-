import { useState } from "react";
import { Search } from "../components/Search";
import { VideoList } from "../components/VideoList";
import { Footer } from "../layout/Footer";
import { Hero } from "../layout/Hero";

export const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <main>
        <Hero />
        <Search search={search} setSearch={setSearch} />
        <VideoList title={"B тренде"} />
      </main>
      <Footer />
    </>
  );
};
