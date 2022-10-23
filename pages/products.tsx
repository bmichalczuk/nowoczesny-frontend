import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InferGetStaticPropsType } from "next";
import { Product } from "../components/Product";
import { title } from "process";
const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-4 py-2 flex-grow max-w-md mx-auto w-full">
        <div>
          <ul>
            {data.map((product) => {
              return <Product {...product}/>;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default ProductsPage;
