// A page is always the leaf of the route subtree.

// A page.js file is required to make a route segment publicly accessible.

// Pages are Server Components by default but can be set to a Client Component.

// Pages can fetch data.

'use client'

// import { Metadata } from 'next'
// import Link from 'next/link'
import { Links } from './components/links'
import { useRouter } from 'next/navigation'
 
// export const metadata: Metadata = {
//   title: 'Next.js',
// }
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Links />
    </div>
  )
}
