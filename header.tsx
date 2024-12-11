import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Trophy, User, Search } from 'lucide-react'
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2 mr-4">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-5 w-5" />
            <span className="font-semibold">rug.fun</span>
          </Link>
          <Button variant="ghost" size="sm" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
            How?
          </Button>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Home className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trophy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline">Connect</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

