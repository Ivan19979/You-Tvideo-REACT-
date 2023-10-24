import { Search } from "../components/Search";
import { Header } from "../layout/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { Footer } from "../layout/Footer";
import { useState } from "react";
import { SearchVideoList } from "../components/SearchVideoList";

export const Video = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <main>
        <Search search={search} setSearch={setSearch} />
        <VideoPlayer setSearch={setSearch} />
        <SearchVideoList title={"Похожие видео"} search={search} />
      </main>
      <Footer />
    </>
  );
};
