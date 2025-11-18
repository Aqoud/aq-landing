'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="uqud.ai logo" width={150} height={50} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">
            How It Works
          </a>
          <a href="#foryou" className="text-sm text-muted-foreground hover:text-foreground transition">
            For You
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" className="border-border hover:bg-gray-200 hover:text-gray-800">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border/40 bg-card/50 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">
              How It Works
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Resources
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full border-border">
                Sign In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
