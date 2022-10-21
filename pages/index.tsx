import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-4 py-2 flex-grow max-w-md mx-auto w-full">
        lasciwa zawartosc
      </main>
      <Footer />
    </div>
  );
};

export default Home;
