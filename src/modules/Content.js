import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function Content() {
  return (
    <div className="body">
      <div className="content">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default Content;
