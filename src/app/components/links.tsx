'use client'
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Links() {
  const pathname = usePathname();

  return (
    <div className="bg-blue-500 py-4">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          {pathname !== '/' && (
            <li>
              <Link href="/">Home</Link>
            </li>
          )}
          {pathname !== '/about' && (
            <li>
              <Link href="/about">About</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
