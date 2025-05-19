import VirtualList from './VirtualScroll'

export default function Home() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)
  return (
    <div className="container py-10 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next Shadcn</h1>
      <p className="text-lg text-muted-foreground mb-4">
        This is a modern Next.js application built with Shadcn UI components.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h2>Virtual Scrolling Demo</h2>
        <VirtualList items={items} />
      </div>
    </div>
  )
}
