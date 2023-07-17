import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home, Faq, Updates } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderFixed from "./components/Header/HeaderFixed";
import { BackToTop } from "./components";
const App = () => {
  const [scroll, setScroll] = useState(
    document.body.getBoundingClientRect().top
  );
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScroll(document.body.getBoundingClientRect().top);
      if (scroll < -50) setFixed(true);
      else setFixed(false);
    };
    globalThis.window?.addEventListener("scroll", onScroll);
    return () => globalThis.window?.removeEventListener("scroll", onScroll);
  });
  return (
    <>
      {fixed ? <HeaderFixed /> : <Header />}
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/frequently_asked_questions" element={<Faq />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
