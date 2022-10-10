import Link from "next/link";


export const Header = () => {
    return (
        <header>
            <nav className="bg-gray-700 max-w-md mx-auto w-full px-4 py-2 text-white">
            nawigacja
            <Link href="/"><a>terefe</a></Link>
            <Link href="/about"><a>about</a></Link>
            </nav>
      </header>
    )
};