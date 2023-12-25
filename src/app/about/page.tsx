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
        <h1>About</h1>
      </Suspense>
    </div>
  )
}
