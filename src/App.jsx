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
      <BrowserRouter>
        <Routes>
          <Route path="/capstone8" element={<Layout />}>
            <Route index element={<IndexRoute />} />
            <Route path="/capstone8/add" element={<Add />} />
            <Route path="/capstone8/library" element={<Library />} />
            <Route path="/capstone8/faq" element={<Faqs />} />
            <Route path="/capstone8/learn" element={<LayoutLearn />}>
              <Route index element={<Game1 />} />
              <Route path="/capstone8/learn/game2" element={<Game2 />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Wildcard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
