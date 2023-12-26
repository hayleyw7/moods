import React, { Suspense } from 'react';
import Loading from './loading'
import { Links } from '../components/links'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Suspense fallback={<Loading />}>
        <h1 className="text-3xl font-bold text-gray-500">About</h1>
        <p className="mt-5 mb-5">This is a demo app created with Next.js, TypeScript, & Tailwind.</p>
      </Suspense>
      <Links />
    </div>
  )
}
