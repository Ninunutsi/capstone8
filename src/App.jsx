import { HashRouter, Route, Routes } from "react-router-dom";
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
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Authorization/Registration";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/#">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexRoute />} />
            <Route path="add" element={<Add />} />
            <Route path="library" element={<Library />} />
            <Route path="faq" element={<Faqs />} />
            <Route path="learn" element={<LayoutLearn />}>
              <Route index element={<Game1 />} />
              <Route path="learn/game2" element={<Game2 />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Authorization />} />
            <Route path="signup" element={<Registration />} />
          </Route>
          <Route path="*" element={<Wildcard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
