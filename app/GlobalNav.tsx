import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div>
      <nav className="bg-zinc-950">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-baseline space-x-4">
            <Link
              href="/"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="blog"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
