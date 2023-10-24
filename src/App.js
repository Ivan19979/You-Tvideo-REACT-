import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Favorite } from "./pages/Favorite";
import { Video } from "./pages/Video";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search/:search" element={<SearchPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
