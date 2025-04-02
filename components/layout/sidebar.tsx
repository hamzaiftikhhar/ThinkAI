"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, MessageSquare, Settings, X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && <div className="fixed inset-0 bg-gray-900/50 z-40 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static inset-y-0 left-0 z-50 
        w-72 bg-white dark:bg-gray-800 border-r 
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        flex flex-col h-full
      `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">ChatAI</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <Button className="w-full justify-start gap-2">
            <PlusCircle className="h-5 w-5" />
            New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Recent chats</h3>
            {[
              "Project planning ideas",
              "Travel recommendations",
              "Recipe for dinner",
              "JavaScript help",
              "Email draft",
            ].map((chat, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start gap-2 text-sm font-normal">
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span className="truncate">{chat}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t mt-auto">
          <Button variant="outline" className="w-full justify-start gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </div>
      </aside>
    </>
  )
}

