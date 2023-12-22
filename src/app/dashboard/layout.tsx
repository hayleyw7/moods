// Only the root layout can contain <html> and <body> tags.

// Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once.

// Layouts do not have access to the route segments below itself. To access all route segments, you can use useSelectedLayoutSegment or useSelectedLayoutSegments in a Client Component.

// A layout.js and page.js file can be defined in the same folder. The layout will wrap the page.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
