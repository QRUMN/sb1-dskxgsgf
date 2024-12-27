"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Settings, BarChart, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  
  const menuItems = [
    { href: '/admin', icon: Home, label: 'Dashboard' },
    { href: '/admin/users', icon: Users, label: 'Users' },
    { href: '/admin/analytics', icon: BarChart, label: 'Analytics' },
    { href: '/admin/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-card border-r transition-all duration-300 z-30",
      isOpen ? "w-64" : "w-20"
    )}>
      <div className="p-6 flex justify-between items-center">
        <h1 className={cn(
          "text-xl font-bold transition-all duration-300",
          !isOpen && "opacity-0"
        )}>
          Admin
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-accent"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      <nav className="px-4 py-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-accent",
                  pathname === item.href && "bg-accent"
                )}
              >
                <item.icon size={20} />
                <span className={cn(
                  "transition-all duration-300",
                  !isOpen && "opacity-0"
                )}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
