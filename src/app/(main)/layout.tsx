import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <div className="flex-1 w-full flex justify-center">{children}</div>
      <Footer />
    </div>
  )
}
