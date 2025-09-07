import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Product />
      <Trending />
      <div className="hidden md:block">
        <Trending  />
      </div>
      <Footer />
    </div>
  );
};

export default App;
