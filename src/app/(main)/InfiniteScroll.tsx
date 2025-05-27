/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { useThrottle } from '@/hooks/useThrottle'

export default function InfiniteScroll() {
  const [data, setData] = useState<any[]>([])
  const [page, setPage] = useState(Math.floor(Math.random() * 10))
  const [loading, setLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // async function getBlurDataURL(src: string) {
  //   const response = await fetch('/api/blur', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ url: src }),
  //   })
  //   const data = await response.json()
  //   return data.blurDataURL
  // }

  const fetchData = async (pageNum: number) => {
    try {
      setLoading(true)
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=20`)
      const resJson = await response.json()
      // const blurDataURLs = await Promise.all(
      //   resJson.map(async (image: any) => {
      //     return {
      //       ...image,
      //       blurDataURL: await getBlurDataURL(image.download_url),
      //     }
      //   }),
      // )
      setData((prev) => [...prev, ...resJson])
      setPage(pageNum)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
      setIsInitialLoading(false)
    }
  }

  useEffect(() => {
    fetchData(page)
  }, [])

  const handleScroll = useThrottle(() => {
    if (!containerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    // Tải thêm khi đã cuộn đến cuối cùng
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight * 0.7 && !loading) {
      fetchData(page + 1)
    }
  }, 0)

  // Tính toán số cột dựa trên kích thước màn hình
  const getColumnCount = () => {
    if (typeof window === 'undefined') return 5
    const width = window.innerWidth
    if (width < 640) return 1
    if (width < 768) return 2
    if (width < 1024) return 3
    if (width < 1280) return 4
    return 5
  }

  // Phân phối ảnh vào các cột dựa trên chiều cao
  const distributeImages = () => {
    const columnCount = getColumnCount()
    const columns: any[][] = Array.from({ length: columnCount }, () => [])
    const columnHeights = Array(columnCount).fill(0)

    data.forEach((image) => {
      // Tìm cột có chiều cao nhỏ nhất
      const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights))
      columns[minHeightIndex].push(image)
      // Giả định chiều cao ảnh là 300px (có thể điều chỉnh dựa trên tỷ lệ thực tế)
      columnHeights[minHeightIndex] += 300
    })

    return columns
  }

  const columnData = distributeImages()

  if (isInitialLoading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-600"></div>
          <p className="text-gray-600">Đang tải ảnh...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        ref={containerRef}
        className="overflow-y-auto max-h-[calc(100dvh-140px)]"
        onScroll={handleScroll}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {columnData.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((image: any, index: number) => (
                <Image
                  key={`${image.author}-${image.id}-${index + 1}`}
                  src={image.download_url}
                  alt={image.author}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* {loading && (
        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-200 border-t-blue-600"></div>
            <span className="text-sm text-gray-600">Đang tải thêm ảnh...</span>
          </div>
        </div>
      )} */}
    </>
  )
}
