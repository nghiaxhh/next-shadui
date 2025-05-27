/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

export function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number): T {
  const lastRun = useRef<number>(0)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now()

      if (lastRun.current && now < lastRun.current + delay) {
        // Nếu đã có timeout đang chạy, clear nó
        if (timeout.current) {
          clearTimeout(timeout.current)
        }

        // Đặt timeout mới
        timeout.current = setTimeout(() => {
          lastRun.current = now
          callback(...args)
        }, delay)
      } else {
        lastRun.current = now
        callback(...args)
      }
    }) as T,
    [callback, delay],
  )
}
