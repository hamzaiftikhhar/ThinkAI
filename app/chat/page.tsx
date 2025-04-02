"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { ChatInput } from "../../components/chat/chat-input"
import { MessageList } from "../../components/chat/message-list"
import { Button } from "../../components/ui/button"
import { Sparkles, Menu } from "lucide-react"
import Sidebar from "../../components/layout/sidebar"

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar for larger screens */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b bg-white dark:bg-gray-800">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold ml-2">ChatAI</h1>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Upgrade</span>
          </Button>
        </header>

        {/* Chat area */}
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-3xl mx-auto">
            <MessageList messages={messages} />
          </div>
        </div>

        {/* Input area */}
        <div className="p-4 border-t bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <ChatInput
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

