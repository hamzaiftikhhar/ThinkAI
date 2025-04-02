import type { Message } from "ai"

export interface ChatSession {
  id: string
  title: string
  createdAt: Date
  messages: Message[]
}

export interface UserProfile {
  id: string
  name: string
  email: string
  image?: string
  plan: "free" | "premium"
  createdAt: Date
}

export interface ChatSettings {
  model: string
  temperature: number
  maxTokens: number
  systemPrompt: string
}

