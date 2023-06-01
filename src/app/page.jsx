import ProductCard from "@/components/ProductCard";
import data from "@/utils/data";

const Home = () => {
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </main>
  );
};

export default Home;
