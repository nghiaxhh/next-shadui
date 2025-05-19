'use client'
import React, { useState } from 'react'

const ITEM_HEIGHT = 30
const VISIBLE_COUNT = 10 // Số item hiển thị trong viewport
const BUFFER = 5 // Item buffer render thêm

const VirtualList = ({ items }: { items: string[] }) => {
  const [scrollTop, setScrollTop] = useState(0)

  const totalHeight = items.length * ITEM_HEIGHT

  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER)
  const endIndex = Math.min(
    items.length,
    Math.ceil((scrollTop + VISIBLE_COUNT * ITEM_HEIGHT) / ITEM_HEIGHT) + BUFFER,
  )

  const visibleItems = items.slice(startIndex, endIndex)

  const offsetY = startIndex * ITEM_HEIGHT

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.scrollTop)
    setScrollTop(e.currentTarget.scrollTop)
  }

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${ITEM_HEIGHT * VISIBLE_COUNT}px`,
        overflowY: 'auto',
        border: '1px solid #ccc',
      }}
    >
      <div style={{ height: `${totalHeight}px` }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                height: `${ITEM_HEIGHT}px`,
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VirtualList
