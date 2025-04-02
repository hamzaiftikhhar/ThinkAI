"use client"

import { Button } from "@/components/ui/button"
import { Bot, Sparkles } from "lucide-react"

interface EmptyScreenProps {
  onStartNewChat: () => void
}

export function EmptyScreen({ onStartNewChat }: EmptyScreenProps) {
  const exampleMessages = [
    "Explain quantum computing in simple terms",
    "Write a poem about artificial intelligence",
    "How do I make a HTTP request in JavaScript?",
    "Create a meal plan for the week",
    "What are the best practices for React development?",
  ]

  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8 shadow-sm">
        <div className="flex items-center justify-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Bot className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h1 className="text-center text-xl font-semibold">Welcome to ChatAI</h1>
        <p className="text-center text-muted-foreground mb-4">Start a conversation with our advanced AI assistant.</p>

        <div className="mt-6 space-y-4">
          <p className="text-sm font-medium">Try asking about:</p>

          <div className="grid gap-2">
            {exampleMessages.map((message, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto py-2"
                onClick={() => onStartNewChat()}
              >
                {message}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <Button className="w-full" onClick={onStartNewChat}>
            <Sparkles className="mr-2 h-4 w-4" />
            Start New Chat
          </Button>
        </div>
      </div>
    </div>
  )
}

