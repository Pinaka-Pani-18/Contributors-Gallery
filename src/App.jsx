import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Profile } from "./components/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
