// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import React, { Suspense } from 'react';
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import Loading from './loading'

export default function Page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h1>Dashboard</h1>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard#settings">Settings</Link>
        </li>
      </Suspense>
    </div>
  )
}
