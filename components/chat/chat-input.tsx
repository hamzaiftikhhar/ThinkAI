"use client"

import type React from "react"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Send, Paperclip, Mic } from "lucide-react"

interface ChatInputProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export function ChatInput({ input, handleInputChange, handleSubmit, isLoading }: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-center rounded-lg border bg-background p-2">
        <Button type="button" variant="ghost" size="icon" className="flex-shrink-0 text-muted-foreground">
          <Paperclip className="h-5 w-5" />
          <span className="sr-only">Attach file</span>
        </Button>

        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Message ChatAI..."
          className="flex-1 resize-none bg-transparent px-2 py-1.5 outline-none"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              if (input.trim()) {
                const form = e.currentTarget.form
                if (form) form.requestSubmit()
              }
            }
          }}
        />

        <Button type="button" variant="ghost" size="icon" className="flex-shrink-0 text-muted-foreground">
          <Mic className="h-5 w-5" />
          <span className="sr-only">Voice input</span>
        </Button>

        <Button type="submit" size="icon" disabled={!input.trim() || isLoading} className="flex-shrink-0 rounded-full">
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  )
}

