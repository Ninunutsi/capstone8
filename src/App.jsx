import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexRoute from "./pages/IndexRoute";
import Wildcard from "./pages/Wildcard";
import Faqs from "./pages/Faqs";
import Add from "./pages/Add";
import Library from "./pages/Library";
import LayoutLearn from "./layout/LayoutLearn";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexRoute />} />
          <Route path="/add" element={<Add />} />
          <Route path="/library" element={<Library />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/learn" element={<LayoutLearn />}>
            <Route index element={<Game1 />} />
            <Route path="/learn/game2" element={<Game2 />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Wildcard />} />
      </Routes>
    </div>
  );
}

export default App;
