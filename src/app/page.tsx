// A page is always the leaf of the route subtree.

// A page.js file is required to make a route segment publicly accessible.

// Pages are Server Components by default but can be set to a Client Component.

// Pages can fetch data. 

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return (
    <h1>Hello, Next.js!</h1>
  )
}