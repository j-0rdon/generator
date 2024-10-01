import { BookOpen, ShoppingCart, User } from "lucide-react"
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">StoryBook</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link href="/templates" className="hover:underline">Templates</Link></li>
            <li><Link href="/ai-tools" className="hover:underline">AI Tools</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-muted text-muted-foreground p-4 text-center">
        © 2023 StoryBook. All rights reserved.
      </footer>
    </div>
  )
}