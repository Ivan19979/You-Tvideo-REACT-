import { Header } from "../layout/Header";
import { Search } from "../components/Search";
import { Footer } from "../layout/Footer";
import { FavoriteVideos } from "../components/FavoriteVideos";
import { useState } from "react";

export const Favorite = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <main>
        <Search search={search} setSearch={setSearch} />
        <FavoriteVideos title={"Избранное"} />
      </main>
      <Footer />
    </>
  );
};
