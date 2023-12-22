'use client'
 
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
export function Links() {

  // You can use usePathname() to determine if a link is active. For example, to add a class to the active link, you can check if the current pathname matches the href of the link:

  const pathname = usePathname()
  const router = useRouter()
 
  return (
    <nav>
      <ul>

        {/* 2 different ways to do links below */}

        <li>
          <button type="button" onClick={() => router.push('/dashboard')}>
            Dashboard
          </button>
        </li>
        <li>

          {/* 1st way to do */}
          
          {/* <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link> */}

          {/* 2nd way to do */}

          <button type="button" onClick={() => router.push('/about')}>
            About
          </button>
        </li>


      </ul>
    </nav>
  )
}
