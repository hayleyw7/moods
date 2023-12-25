// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import React, { Suspense } from 'react';
import Loading from './loading'
import { Links } from '../components/links'

export default function Page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <nav id="navbar">
          <Links />
        </nav>
        <h1>Dashboard</h1>
      </Suspense>
    </div>
  )
}
