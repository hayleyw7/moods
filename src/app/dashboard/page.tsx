// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard#settings">Settings</Link>
        </li>
    </div>
  )
}
