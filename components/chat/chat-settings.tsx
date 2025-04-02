"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "../../components/ui/slider"
import {Slider} from "../../components/ui/"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Settings } from "lucide-react"
import type { ChatSettings } from "@/types/chat"

interface ChatSettingsProps {
  settings: ChatSettings
  onSettingsChange: (settings: ChatSettings) => void
}

export function ChatSettingsDialog({ settings, onSettingsChange }: ChatSettingsProps) {
  const [localSettings, setLocalSettings] = useState<ChatSettings>(settings)

  const handleSave = () => {
    onSettingsChange(localSettings)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat Settings</DialogTitle>
          <DialogDescription>Customize your AI assistant's behavior</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="model" className="text-sm font-medium">
              Model
            </label>
            <Select
              value={localSettings.model}
              onValueChange={(value) => setLocalSettings({ ...localSettings, model: value })}
            >
              <SelectTrigger id="model">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="temperature" className="text-sm font-medium">
              Temperature: {localSettings.temperature.toFixed(1)}
            </label>
            <Slider
              id="temperature"
              min={0}
              max={2}
              step={0.1}
              value={[localSettings.temperature]}
              onValueChange={(value) => setLocalSettings({ ...localSettings, temperature: value[0] })}
            />
            <p className="text-xs text-muted-foreground">Higher values produce more creative responses</p>
          </div>

          <div className="grid gap-2">
            <label htmlFor="maxTokens" className="text-sm font-medium">
              Max Tokens: {localSettings.maxTokens}
            </label>
            <Slider
              id="maxTokens"
              min={100}
              max={4000}
              step={100}
              value={[localSettings.maxTokens]}
              onValueChange={(value) => setLocalSettings({ ...localSettings, maxTokens: value[0] })}
            />
            <p className="text-xs text-muted-foreground">Maximum length of the generated response</p>
          </div>

          <div className="grid gap-2">
            <label htmlFor="systemPrompt" className="text-sm font-medium">
              System Prompt
            </label>
            <Textarea
              id="systemPrompt"
              value={localSettings.systemPrompt}
              onChange={(e) => setLocalSettings({ ...localSettings, systemPrompt: e.target.value })}
              rows={3}
              placeholder="Instructions for the AI assistant"
            />
            <p className="text-xs text-muted-foreground">Define how the AI should behave</p>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

