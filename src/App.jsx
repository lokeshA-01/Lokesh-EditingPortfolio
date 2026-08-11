import Header from "./components/Header";
import Landing from "./pages/Landing";
import FancyEdits from "./pages/FancyEdits";
import Teasers from "./pages/Teasers";
import Reels from "./pages/Reels";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const path = window.location.pathname;

  let page;

  switch (path) {
    case "/fancy-edits":
      page = <FancyEdits />;
      break;

    case "/teasers":
      page = <Teasers />;
      break;

    case "/reels":
      page = <Reels />;
      break;

    case "/about":
      page = <About />;
      break;

    case "/contact":
      page = <Contact />;
      break;

    case "/":
    default:
      page = <Landing />;
      break;
  }

  return (
    <>
      <Header />
      {page}
    </>
  );
}

export default App;