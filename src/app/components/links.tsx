'use client'
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Links() {
  const pathname = usePathname();

  return (
    <button className="bg-gray-500 py-2 px-4 text-white font-bold rounded-lg shadow-lg">
      {pathname !== '/' && <Link href="/">Home</Link>}
      {pathname !== '/about' && <Link href="/about">About</Link>}
    </button>
  );
};
