import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[60px] flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/login" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Next</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="/market"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Market
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
