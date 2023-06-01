import data from "@/utils/data";
import Link from "next/link";

// const titulo = product.name;
// export const metadata = {
//   title: { titulo },
// };

export default function ProductScreen({ params }) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return <div>Produto não encontrado</div>;
  }
  return (
    <main>
      <div className="py-2">
        <Link href="/">Voltar</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img src={product.image} alt={product.description} />
        </div>
        <div>
          <ul>
            <li className="text-lg">{product.name}</li>
            <li>Marca: {product.brand}</li>
            <li>
              {product.rating} de {product.numReviews} avaliações
            </li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Valor</div>
              <div>R$ {product.price}</div>
            </div>
            <div className="mb-2">
              <strong
                className={
                  product.countInStock > 0 ? "text-green-800" : "text-red-800"
                }
              >
                {product.countInStock > 0
                  ? "Em estoque"
                  : "Produto indisponível"}
              </strong>
            </div>
            <button
              className={
                product.countInStock > 0 ? "primary-button w-full" : "hidden"
              }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
