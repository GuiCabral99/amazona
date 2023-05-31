import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex h-20 justify-between items-center px-4 shadow-md">
        <Link href="/" className="text-lg font-bold">
          amazona
        </Link>
        <div>
          <Link href="/cart" className="p-2">
            Carrinho
          </Link>
          <Link href="/login" className="p-2">
            Conectar-se
          </Link>
        </div>
      </nav>
    </header>
  );
}
