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
        <Suspense fallback={<p>Loading Home link...</p>}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </Suspense>
        <Suspense fallback={<p>Loading Settings link...</p>}>
          <li>
            <Link href="/dashboard#settings">Settings</Link>
          </li>
        </Suspense>
      </Suspense>
    </div>
  )
}
