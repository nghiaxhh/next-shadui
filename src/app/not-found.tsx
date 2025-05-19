'use client'

import { Button } from '@/components/ui/button'
import useRedirectAfterSomeSeconds from '@/hooks/useRedirect'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  const { secondsRemaining } = useRedirectAfterSomeSeconds('/', 5)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur"></div>
        <div className="relative flex flex-col items-center gap-2 rounded-lg bg-background p-8">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            404
          </h1>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-pink-600 to-purple-600"></div>
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-muted-foreground max-w-[500px]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          <br />
          Redirecting to homepage in {secondsRemaining}{' '}
          {secondsRemaining > 1 ? 'seconds' : 'second'}
        </p>
      </div>

      <Button asChild className="group">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return Home
        </Link>
      </Button>
    </div>
  )
}
