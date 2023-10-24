import { useState } from "react";
import { Search } from "../components/Search";
import { Footer } from "../layout/Footer";
import { Hero } from "../layout/Hero";
import { SearchVideoList } from "../components/SearchVideoList";
import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const params = useParams();
  const [search, setSearch] = useState(params.search);

  return (
    <>
      <main>
        <Hero />
        <Search value={search} setSearch={setSearch} />
        <SearchVideoList
          title={"Результаты по итогам поиска"}
          search={search}
        />
      </main>
      <Footer />
    </>
  );
};
