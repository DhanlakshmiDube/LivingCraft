
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedDesigns from "./components/FeaturedDesigns";
import DesignerPortfolio from "./components/DesignerPortfolio";
import ProductExplorer from "./components/ProductExplorer";
import BudgetCalculator from "./components/BudgetCalculator";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedDesigns />
      <DesignerPortfolio />
      <ProductExplorer />
      <BudgetCalculator />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
