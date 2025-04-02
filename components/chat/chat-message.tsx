import type { Message } from "ai"
import { User, Bot } from "lucide-react"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex max-w-[80%] md:max-w-[70%] ${isUser ? "flex-row-reverse" : "flex-row"} gap-3`}>
        <div
          className={`
          flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border 
          ${isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}
        `}
        >
          {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </div>

        <div
          className={`
          rounded-lg px-4 py-3 text-sm
          ${isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}
        `}
        >
          {message.content}
        </div>
      </div>
    </div>
  )
}

