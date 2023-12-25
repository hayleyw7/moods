'use client'
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {pathname !== '/' && (
          <li>
            <Link href="/">Home</Link>
          </li>
        )}
        {pathname !== '/dashboard' && (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}
        {pathname !== '/settings' && (
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
