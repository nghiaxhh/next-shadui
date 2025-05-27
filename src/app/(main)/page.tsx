import InfiniteScroll from './InfiniteScroll'

export default function Home() {
  // const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)
  return (
    <div className="container py-10 overflow-y-auto">
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <h2>Virtual Scrolling Demo</h2>
        <VirtualList items={items} />
      </div> */}
      <InfiniteScroll />
    </div>
  )
}
