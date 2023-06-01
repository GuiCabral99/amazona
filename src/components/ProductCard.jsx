import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.description}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-4">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button type="button" className="primary-button">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
