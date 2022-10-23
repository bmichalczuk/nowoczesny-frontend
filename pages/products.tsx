import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const ProductsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-4 py-2 flex-grow max-w-md mx-auto w-full">products</div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
